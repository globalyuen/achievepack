import json
import os

locales = {
  "en": {
    "pouchDateCoding": {
      "author": {
        "credentials": "14+ Years Packaging Engineering | GRS & FSC Auditing Expert",
        "bio": "With a background in polytechnic materials science and GRS certification auditing, Ryan Wong helps B2B brand managers select and integrate optimal printing systems for sustainable flexible pack lines.",
        "cta": "Consult Ryan"
      },
      "seo": {
        "title": "Pouch Date Coding Guide: Expiration & Lot Printing | Achieve Pack",
        "description": "Learn how to print expiration dates, best before dates, and lot codes on flexible pouches. Compare TTO, TIJ/CIJ, and hot stamping coding methods.",
        "keywords": {
          "1": "Pouch Expiration Date Coder",
          "2": "Thermal Transfer Overprinting TTO",
          "3": "Thermal Inkjet Coder TIJ",
          "4": "Pouch Lot Code Printer",
          "5": "Bag Sealer Date Stamp"
        }
      },
      "hero": {
        "title": "Pouch Date Coding: Expiration & Lot Code Printing",
        "subtitle": "A technical engineering guide to applying scannable barcodes, batch codes, and expiration dates on flexible packaging pouches."
      },
      "quickAnswer": "Applying expiration dates to flexible pouches is done via three main methods: Thermal Transfer Overprinting (TTO) for pre-filling flat film inline; Continuous or Thermal Inkjet (CIJ/TIJ) for non-contact coding on filled bags via conveyors; and Hot Stamping or Debossing built directly into the heat sealing jaws. The choice depends on filled vs. flat film states, material composition (plastic vs. paper), and production throughput.",
      "sections": {
        "notebook": {
          "title": "From Ryan Wong's Engineering Notebook",
          "badge": "Expert Ink Insight",
          "p1": "\"In my 14 years in packaging design, I've seen many startups run into compliance issues because their expiration dates smudged or became unreadable during shipping. Specialty films, particularly our EN 13432 certified compostable biopolymers or GRS-certified recycled PCR substrates, have surface energies that behave differently from traditional plastics.\"",
          "p2": "\"If you use water-based inks or standard office stamps on these materials, the print will not cure and will rub off under friction. For Thermal Inkjet (TIJ) printers, always specify a MEK-based or ethanol-based fast-cure solvent ink. For brands utilizing manual band sealers, debossing the characters directly into the heat seal seam is the ultimate fail-safe because it doesn't rely on chemical adhesion.\""
        },
        "methods": {
          "title": "The Three Most Reliable Pouch Coding Methods"
        },
        "comparison": {
          "title": "Technical Comparison: Pouch Coding Technologies"
        },
        "painPoints": {
          "title": "5 Pouch Coding Pain Points & Engineering Solutions"
        },
        "tips": {
          "title": "Strategic Guidelines for Artwork & Placement"
        }
      }
    }
  },
  "fr": {
    "pouchDateCoding": {
      "author": {
        "credentials": "14+ ans d'ingénierie d'emballage | Expert en audit GRS & FSC",
        "bio": "Avec une formation en science des matériaux polytechniques et en audit de certification GRS, Ryan Wong aide les responsables de marque B2B à sélectionner et intégrer les systèmes d'impression optimaux pour les lignes d'emballage flexible durable.",
        "cta": "Consulter Ryan"
      },
      "seo": {
        "title": "Guide de codage de date pour sachets : impression de date d'expiration et de lot | Achieve Pack",
        "description": "Découvrez comment imprimer les dates d'expiration, les dates de péremption et les codes de lot sur les sachets flexibles. Comparez le TTO, le TIJ/CIJ et le marquage à chaud.",
        "keywords": {
          "1": "Codeur de date d'expiration sachet",
          "2": "Surimpression par transfert thermique TTO",
          "3": "Codeur jet d'encre thermique TIJ",
          "4": "Imprimante de code de lot sachet",
          "5": "Marquage de date pour soudeuse de sacs"
        }
      },
      "hero": {
        "title": "Codage de date pour sachets : impression de date d'expiration et de lot",
        "subtitle": "Un guide technique d'ingénierie pour appliquer des codes-barres scannables, des codes de lot et des dates d'expiration sur des sachets flexibles."
      },
      "quickAnswer": "L'application de dates d'expiration sur les sachets flexibles s'effectue via trois méthodes principales : la surimpression par transfert thermique (TTO) pour le pré-remplissage en ligne de films plats ; le jet d'encre continu ou thermique (CIJ/TIJ) pour le codage sans contact sur les sacs remplis via des convoyeurs ; et le marquage à chaud ou gaufrage directement intégré dans les mâchoires de scellage. Le choix dépend de l'état du film (rempli ou plat), de la composition du matériau (plastique ou papier) et de la cadence de production.",
      "sections": {
        "notebook": {
          "title": "Du carnet d'ingénierie de Ryan Wong",
          "badge": "Expert en encrage",
          "p1": "\"Au cours de mes 14 années dans la conception d'emballages, j'ai vu de nombreuses startups rencontrer des problèmes de conformité parce que leurs dates d'expiration s'effaçaient ou devenaient illisibles pendant le transport. Les films spécialisés, en particulier nos biopolymères compostables certifiés EN 13432 ou nos substrats PCR recyclés certifiés GRS, ont des énergies de surface différentes de celles des plastiques traditionnels.\"",
          "p2": "\"Si vous utilisez des encres à base d'eau ou des tampons de bureau standard sur ces matériaux, l'impression ne durcira pas et s'effacera sous l'effet du frottement dans les cartons d'expédition. Pour les imprimantes à jet d'encre thermique (TIJ), spécifiez toujours une encre solvant à séchage rapide à base de MEK ou d'éthanol. Pour les marques utilisant des soudeuses manuelles, le gaufrage des caractères directement dans le joint de scellage est la solution infaillible car elle ne dépend pas de l'adhérence chimique.\""
        },
        "methods": {
          "title": "Les trois méthodes de codage de sachets les plus fiables"
        },
        "comparison": {
          "title": "Comparaison technique : technologies de codage pour sachets"
        },
        "painPoints": {
          "title": "5 problèmes de codage de sachets et solutions d'ingénierie"
        },
        "tips": {
          "title": "Directives stratégiques pour le design et le placement"
        }
      }
    }
  },
  "es": {
    "pouchDateCoding": {
      "author": {
        "credentials": "14+ Años de Ingeniería de Empaque | Experto en Auditoría GRS y FSC",
        "bio": "Con formación en ciencia de materiales politécnicos y auditoría de certificación GRS, Ryan Wong ayuda a los gerentes de marca B2B a seleccionar e integrar los sistemas de impresión óptimos para líneas de empaque flexible sostenible.",
        "cta": "Consultar a Ryan"
      },
      "seo": {
        "title": "Guía de codificación de fecha para bolsas: impresión de caducidad y lote | Achieve Pack",
        "description": "Aprenda a imprimir fechas de vencimiento, fechas de consumo preferente y códigos de lote en bolsas flexibles. Compare los métodos de codificación TTO, TIJ/CIJ y estampado en caliente.",
        "keywords": {
          "1": "Codificador de fecha de caducidad para bolsas",
          "2": "Sobreimpresión por transferencia térmica TTO",
          "3": "Codificador por chorro de tinta térmico TIJ",
          "4": "Impresora de código de lote para bolsas",
          "5": "Estampador de fecha para selladora de bolsas"
        }
      },
      "hero": {
        "title": "Codificación de fecha para bolsas: impresión de caducidad y lote",
        "subtitle": "Una guía técnica de ingeniería para aplicar códigos de barras escaneables, códigos de lote y fechas de vencimiento en bolsas flexibles."
      },
      "quickAnswer": "La aplicación de fechas de vencimiento en bolsas flexibles se realiza mediante tres métodos principales: sobreimpresión por transferencia térmica (TTO) para el prellenado en línea de películas planas; inyección de tinta continua o térmica (CIJ/TIJ) para codificación sin contacto en bolsas llenas a través de transportadores; y estampado en caliente o grabado directamente integrado en las mordazas de sellado. La elección depende del estado de la película (llena o plana), la composición del material (plástico o papel) y el volumen de producción.",
      "sections": {
        "notebook": {
          "title": "Del cuaderno de ingeniería de Ryan Wong",
          "badge": "Experto en tintas",
          "p1": "\"En mis 14 años en el diseño de empaques, he visto a muchas startups tener problemas de cumplimiento debido a que sus fechas de vencimiento se borraban o se volvían ilegibles durante el envío. Las películas especiales, en particular nuestros biopolímeros compostables certificados EN 13432 o los sustratos de PCR reciclados certificados por GRS, tienen energías superficiales que se comportan de manera diferente a los plásticos tradicionales.\"",
          "p2": "\"Si utiliza tintas a base de agua o sellos de oficina estándar en estos materiales, la impresión no se curará y se borrará por la fricción en las cajas de envío. Para las impresoras de inyección de tinta térmica (TIJ), especifique siempre una tinta solvente de curado rápido a base de MEK o etanol. Para las marcas que utilizan selladoras manuales, grabar los caracteres directamente en la costura de sellado térmico es la solución infalible porque no depende de la adhesión química.\""
        },
        "methods": {
          "title": "Los tres métodos de codificación de bolsas más confiables"
        },
        "comparison": {
          "title": "Comparación técnica : tecnologías de codificación de bolsas"
        },
        "painPoints": {
          "title": "5 problemas de codificación de bolsas y soluciones de ingeniería"
        },
        "tips": {
          "title": "Directrices estratégicas para el diseño y la colocación"
        }
      }
    }
  },
  "zh-TW": {
    "pouchDateCoding": {
      "author": {
        "credentials": "14年+包裝工程經驗 | GRS & FSC 審核專家",
        "bio": "Ryan Wong 擁有理工材料科學與 GRS 認證審核背景，致力於協助 B2B 品牌經理針對永續軟包裝生產線選擇並整合最佳的日期噴印系統。",
        "cta": "諮詢 Ryan"
      },
      "seo": {
        "title": "軟袋日期噴印與打碼指南：過期日期與批號列印 | Achieve Pack",
        "description": "了解如何在軟包裝袋上列印過期日期、最佳食用日期和批號。對比熱轉印打碼（TTO）、熱噴墨（TIJ/CIJ）和熱壓/凹凸印字打碼方式。",
        "keywords": {
          "1": "軟袋過期日期打碼機",
          "2": "熱轉印打碼機 TTO",
          "3": "熱噴墨打碼機 TIJ",
          "4": "軟袋批號列印機",
          "5": "封口機日期鋼印"
        }
      },
      "hero": {
        "title": "軟袋日期與批號打碼列印指南",
        "subtitle": "在軟包裝袋上列印可掃描條碼、批次代碼和有效日期的專業技術指南。"
      },
      "quickAnswer": "在軟袋上列印有效日期主要有三種方式：熱轉印打碼（TTO）適用於灌裝前在線列印平整捲膜；連續/熱噴墨（CIJ/TIJ）適用於灌裝後在傳送帶上對填充袋進行非接觸式噴碼；熱壓/凹凸鋼印則直接整合在封口機加熱夾治具中。選擇取決於袋子是處於填充還是平整捲膜狀態、材料成分（塑料還是牛皮紙）以及生產產能。",
      "sections": {
        "notebook": {
          "title": "源自 Ryan Wong 的工程師手記",
          "badge": "專業油墨見解",
          "p1": "\"在我從事包裝設計的14年中，我見過許多初創品牌因為有效日期在運輸過程中模糊或變得無法閱讀而面臨合規性問題。特別是我們的 EN 13432 認證可堆肥生物聚合物或 GRS 認證的回收 PCR 基材，其表面自由能與傳統塑料不同。\"",
          "p2": "\"如果您在這些材料上使用水性油墨或普通辦公印章，列印內容將無法固化，並會因運輸紙箱中的袋間摩擦而磨損。對於熱噴墨（TIJ）印表機，請務必指定使用 MEK 基或乙醇基的快速固化溶劑型油墨。對於使用手動帶式封口機的品牌，直接在熱封縫中壓印字符是最終的防錯方案，因為它不依賴化學粘附。\""
        },
        "methods": {
          "title": "三種最可靠的軟袋打碼列印方法"
        },
        "comparison": {
          "title": "技術對比：軟袋打碼列印技術"
        },
        "painPoints": {
          "title": "5個軟袋打碼常見問題與工程解決方案"
        },
        "tips": {
          "title": "版面設計與噴印位置的策略性指引"
        }
      }
    }
  }
}

file_map = {
  "en": "src/locales/en.json",
  "fr": "src/locales/fr.json",
  "es": "src/locales/es.json",
  "zh-TW": "src/locales/zh-TW.json"
}

for lang, data_to_add in locales.items():
    path = file_map[lang]
    if os.path.exists(path):
        print(f"Updating {path}...")
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Merge new key
        data["pouchDateCoding"] = data_to_add["pouchDateCoding"]
        
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Successfully updated {path}!")
    else:
        print(f"Error: {path} not found!")
