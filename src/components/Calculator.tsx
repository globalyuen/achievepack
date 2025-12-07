import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calculator as CalcIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
    PackageSpecs,
    UsageDetails,
    CalculatorResults,
    PackageType,
    ShippingFrequency,
    calculateSavings,
    formatCurrency,
    formatNumber,
    formatPercentage,
} from '../utils/calculatorUtils';
import { getImage } from '../utils/imageMapper';

interface CalculatorProps {
    isOpen: boolean;
    onClose: () => void;
    language: string;
    onSubmitToContact: (results: CalculatorResults) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ isOpen, onClose, language, onSubmitToContact }) => {
    const { t } = useTranslation();
    const [currentStep, setCurrentStep] = useState(1);
    const [results, setResults] = useState<CalculatorResults | null>(null);

    // Form state
    const [packageSpecs, setPackageSpecs] = useState<PackageSpecs>({
        type: 'rigid-plastic',
        dimensions: { length: null, width: null, height: null },
        weight: null,
        material: null,
    });

    const [usage, setUsage] = useState<UsageDetails>({
        unitsPerMonth: 1000,
        shippingDistance: null,
        shippingFrequency: 'weekly',
        currentPackagingCost: null,
        currentShippingCost: null,
    });

    // "Not sure" flags
    const [notSure, setNotSure] = useState({
        dimensions: false,
        weight: false,
        material: false,
        volume: false,
        shipping: false,
        costs: false,
    });

    if (!isOpen) return null;

    const totalSteps = 4;

    const handleNext = () => {
        if (currentStep === 3) {
            // Calculate results when moving from step 3 to step 4
            const calculatedResults = calculateSavings(packageSpecs, usage);
            setResults(calculatedResults);
            setCurrentStep(4);
        } else if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(1);
        setResults(null);
        setPackageSpecs({
            type: 'rigid-plastic',
            dimensions: { length: null, width: null, height: null },
            weight: null,
            material: null,
        });
        setUsage({
            unitsPerMonth: 1000,
            shippingDistance: null,
            shippingFrequency: 'weekly',
            currentPackagingCost: null,
            currentShippingCost: null,
        });
        setNotSure({
            dimensions: false,
            weight: false,
            material: false,
            volume: false,
            shipping: false,
            costs: false,
        });
    };

    const handleGetQuote = () => {
        if (results) {
            onSubmitToContact(results);
        }
    };

    // Helper function to get calculator images
    const img = (imageName: string) => getImage(imageName, language as any);

    const packageTypes: { type: PackageType; imageName: string }[] = [
        { type: 'rigid-plastic', imageName: 'calculator-rigid-plastic' },
        { type: 'glass', imageName: 'calculator-glass-jar' },
        { type: 'metal', imageName: 'calculator-metal-can' },
        { type: 'cardboard', imageName: 'calculator-cardboard-box' },
        { type: 'flexible', imageName: 'calculator-flexible-pouch' },
        { type: 'unknown', imageName: 'calculator-question-mark' },
    ];

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <CalcIcon className="h-6 w-6" />
                            {t('calculator.title')}
                        </h2>
                        <p className="text-primary-100 mt-1">{t('calculator.subtitle')}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="bg-neutral-100 px-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-600">
                            {t('calculator.progress', { current: currentStep, total: totalSteps })}
                        </span>
                        <span className="text-sm text-neutral-500">{Math.round((currentStep / totalSteps) * 100)}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div
                            className="bg-primary-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    {/* Step 1: Package Type Selection */}
                    {currentStep === 1 && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('calculator.step1.title')}</h3>
                                <p className="text-neutral-600">{t('calculator.step1.subtitle')}</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {packageTypes.map((pkg) => (
                                    <div
                                        key={pkg.type}
                                        onClick={() => setPackageSpecs({ ...packageSpecs, type: pkg.type })}
                                        className={`cursor-pointer rounded-xl border-2 p-4 transition-all hover:shadow-lg hover:scale-105 ${packageSpecs.type === pkg.type
                                                ? 'border-primary-500 bg-primary-50 shadow-md'
                                                : 'border-neutral-200 hover:border-primary-300'
                                            }`}
                                    >
                                        <div className="aspect-square bg-neutral-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={img(pkg.imageName)}
                                                alt={t(`calculator.step1.options.${pkg.type.replace('-', '')}`)}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f3f4f6" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="14"%3EImage%3C/text%3E%3C/svg%3E';
                                                }}
                                            />
                                        </div>
                                        <p className="text-center font-medium text-neutral-900">
                                            {t(`calculator.step1.options.${pkg.type.replace('-', '')}`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Package Specifications */}
                    {currentStep === 2 && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('calculator.step2.title')}</h3>
                                <p className="text-neutral-600">{t('calculator.step2.subtitle')}</p>
                            </div>

                            {/* Dimensions */}
                            <div className="bg-neutral-50 rounded-xl p-6">
                                <label className="block text-lg font-semibold text-neutral-900 mb-4">
                                    {t('calculator.step2.dimensions.label')}
                                </label>
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            {t('calculator.step2.dimensions.length')}
                                        </label>
                                        <input
                                            type="number"
                                            disabled={notSure.dimensions}
                                            value={packageSpecs.dimensions.length || ''}
                                            onChange={(e) =>
                                                setPackageSpecs({
                                                    ...packageSpecs,
                                                    dimensions: { ...packageSpecs.dimensions, length: parseFloat(e.target.value) || null },
                                                })
                                            }
                                            className="w-full px-4 py-2 border-2 border-neutral-300 rounded-lg focus:border-primary-500 focus:outline-none disabled:bg-neutral-200"
                                            placeholder="100"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            {t('calculator.step2.dimensions.width')}
                                        </label>
                                        <input
                                            type="number"
                                            disabled={notSure.dimensions}
                                            value={packageSpecs.dimensions.width || ''}
                                            onChange={(e) =>
                                                setPackageSpecs({
                                                    ...packageSpecs,
                                                    dimensions: { ...packageSpecs.dimensions, width: parseFloat(e.target.value) || null },
                                                })
                                            }
                                            className="w-full px-4 py-2 border-2 border-neutral-300 rounded-lg focus:border-primary-500 focus:outline-none disabled:bg-neutral-200"
                                            placeholder="100"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                                            {t('calculator.step2.dimensions.height')}
                                        </label>
                                        <input
                                            type="number"
                                            disabled={notSure.dimensions}
                                            value={packageSpecs.dimensions.height || ''}
                                            onChange={(e) =>
                                                setPackageSpecs({
                                                    ...packageSpecs,
                                                    dimensions: { ...packageSpecs.dimensions, height: parseFloat(e.target.value) || null },
                                                })
                                            }
                                            className="w-full px-4 py-2 border-2 border-neutral-300 rounded-lg focus:border-primary-500 focus:outline-none disabled:bg-neutral-200"
                                            placeholder="150"
                                        />
                                    </div>
                                </div>
                                <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notSure.dimensions}
                                        onChange={(e) => setNotSure({ ...notSure, dimensions: e.target.checked })}
                                        className="w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                                    />
                                    {t('calculator.step2.dimensions.notSure')}
                                </label>
                            </div>

                            {/* Weight */}
                            <div className="bg-neutral-50 rounded-xl p-6">
                                <label className="block text-lg font-semibold text-neutral-900 mb-4">
                                    {t('calculator.step2.weight.label')}
                                </label>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        {t('calculator.step2.weight.package')}
                                    </label>
                                    <input
                                        type="number"
                                        disabled={notSure.weight}
                                        value={packageSpecs.weight || ''}
                                        onChange={(e) => setPackageSpecs({ ...packageSpecs, weight: parseFloat(e.target.value) || null })}
                                        className="w-full px-4 py-2 border-2 border-neutral-300 rounded-lg focus:border-primary-500 focus:outline-none disabled:bg-neutral-200"
                                        placeholder="50"
                                    />
                                </div>
                                <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notSure.weight}
                                        onChange={(e) => setNotSure({ ...notSure, weight: e.target.checked })}
                                        className="w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                                    />
                                    {t('calculator.step2.weight.notSure')}
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Usage Details */}
                    {currentStep === 3 && (
                        <div className="space-y-6 animate-fadeIn">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{t('calculator.step3.title')}</h3>
                                <p className="text-neutral-600">{t('calculator.step3.subtitle')}</p>
                            </div>

                            {/* Monthly Volume */}
                            <div className="bg-neutral-50 rounded-xl p-6">
                                <label className="block text-lg font-semibold text-neutral-900 mb-4">
                                    {t('calculator.step3.volume.label')}
                                </label>
                                <input
                                    type="number"
                                    disabled={notSure.volume}
                                    value={usage.unitsPerMonth}
                                    onChange={(e) => setUsage({ ...usage, unitsPerMonth: parseInt(e.target.value) || 1000 })}
                                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-primary-500 focus:outline-none disabled:bg-neutral-200 text-lg"
                                    placeholder="1000"
                                />
                                <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer mt-3">
                                    <input
                                        type="checkbox"
                                        checked={notSure.volume}
                                        onChange={(e) => {
                                            setNotSure({ ...notSure, volume: e.target.checked });
                                            if (e.target.checked) setUsage({ ...usage, unitsPerMonth: 1000 });
                                        }}
                                        className="w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                                    />
                                    {t('calculator.step3.volume.notSure')}
                                </label>
                            </div>

                            {/* Shipping Distance (Optional) */}
                            <div className="bg-neutral-50 rounded-xl p-6">
                                <label className="block text-lg font-semibold text-neutral-900 mb-4">
                                    {t('calculator.step3.shipping.label')}
                                </label>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                        {t('calculator.step3.shipping.distance')}
                                    </label>
                                    <input
                                        type="number"
                                        disabled={notSure.shipping}
                                        value={usage.shippingDistance || ''}
                                        onChange={(e) => setUsage({ ...usage, shippingDistance: parseFloat(e.target.value) || null })}
                                        className="w-full px-4 py-2 border-2 border-neutral-300 rounded-lg focus:border-primary-500 focus:outline-none disabled:bg-neutral-200"
                                        placeholder="500"
                                    />
                                </div>
                                <label className="flex items-center gap-2 text-sm text-neutral-600 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={notSure.shipping}
                                        onChange={(e) => setNotSure({ ...notSure, shipping: e.target.checked })}
                                        className="w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                                    />
                                    {t('calculator.step3.shipping.notSure')}
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Results */}
                    {currentStep === 4 && results && (
                        <div className="space-y-8 animate-fadeIn">
                            <div className="text-center mb-8">
                                <div className="inline-block p-4 bg-primary-100 rounded-full mb-4">
                                    <img
                                        src={img('calculator-success-icon')}
                                        alt="Success"
                                        className="w-16 h-16"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Ccircle fill="%2310b981" cx="32" cy="32" r="32"/%3E%3Cpath fill="white" d="M20 32l8 8 16-16" stroke="white" stroke-width="4" fill="none"/%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <h3 className="text-3xl font-bold text-neutral-900 mb-2">{t('calculator.step4.title')}</h3>
                                <p className="text-neutral-600">{t('calculator.step4.subtitle')}</p>
                            </div>

                            {/* Total Savings - Highlight */}
                            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center">
                                <p className="text-lg mb-2 opacity-90">{t('calculator.step4.costSavings.total')}</p>
                                <p className="text-5xl font-bold">{formatCurrency(results.costSavings.totalAnnualSavings, language)}</p>
                                <p className="text-sm mt-2 opacity-75">per year</p>
                            </div>

                            {/* Detailed Breakdown */}
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Cost Savings */}
                                <div className="bg-neutral-50 rounded-xl p-6">
                                    <h4 className="text-lg font-bold text-neutral-900 mb-4">{t('calculator.step4.costSavings.title')}</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.costSavings.material')}</span>
                                            <span className="font-semibold text-primary-600">
                                                {formatCurrency(results.costSavings.materialSavings, language)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.costSavings.shipping')}</span>
                                            <span className="font-semibold text-primary-600">
                                                {formatCurrency(results.costSavings.shippingSavings, language)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.costSavings.storage')}</span>
                                            <span className="font-semibold text-primary-600">
                                                {formatCurrency(results.costSavings.storageSavings, language)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Environmental Impact */}
                                <div className="bg-neutral-50 rounded-xl p-6">
                                    <h4 className="text-lg font-bold text-neutral-900 mb-4">{t('calculator.step4.environmental.title')}</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.environmental.co2')}</span>
                                            <span className="font-semibold text-green-600">
                                                {formatNumber(results.environmentalImpact.co2Reduction, language)} kg
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.environmental.plastic')}</span>
                                            <span className="font-semibold text-green-600">
                                                {formatNumber(results.environmentalImpact.plasticReduction, language)} kg
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.environmental.water')}</span>
                                            <span className="font-semibold text-blue-600">
                                                {formatNumber(results.environmentalImpact.waterSavings, language)} L
                                            </span>
                                        </div>
                                        <div className="text-xs text-neutral-500 mt-2">
                                            {t('calculator.step4.environmental.trees', { count: results.environmentalImpact.treesEquivalent })}
                                        </div>
                                    </div>
                                </div>

                                {/* Operational Benefits */}
                                <div className="bg-neutral-50 rounded-xl p-6">
                                    <h4 className="text-lg font-bold text-neutral-900 mb-4">{t('calculator.step4.operational.title')}</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.operational.storage')}</span>
                                            <span className="font-semibold text-primary-600">
                                                {formatPercentage(results.operationalBenefits.storageSpaceSaved)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.operational.efficiency')}</span>
                                            <span className="font-semibold text-primary-600">
                                                {formatPercentage(results.operationalBenefits.shippingEfficiency)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-neutral-600">{t('calculator.step4.operational.handling')}</span>
                                            <span className="font-semibold text-primary-600">
                                                {formatPercentage(results.operationalBenefits.handlingTimeReduction)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="border-t border-neutral-200 p-6 flex justify-between items-center bg-neutral-50">
                    <div>
                        {currentStep > 1 && currentStep < 4 && (
                            <button
                                onClick={handleBack}
                                className="flex items-center gap-2 px-6 py-3 text-neutral-700 hover:bg-neutral-200 rounded-lg transition-all"
                            >
                                <ChevronLeft className="h-5 w-5" />
                                {t('calculator.actions.back')}
                            </button>
                        )}
                        {currentStep === 4 && (
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-2 px-6 py-3 text-neutral-700 hover:bg-neutral-200 rounded-lg transition-all"
                            >
                                {t('calculator.actions.reset')}
                            </button>
                        )}
                    </div>

                    <div className="flex gap-3">
                        {currentStep < 4 && (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all hover:shadow-lg"
                            >
                                {currentStep === 3 ? t('calculator.actions.calculate') : t('calculator.actions.next')}
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        )}
                        {currentStep === 4 && (
                            <button
                                onClick={handleGetQuote}
                                className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all hover:shadow-lg"
                            >
                                {t('calculator.actions.getQuote')}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
