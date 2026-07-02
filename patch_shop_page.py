import re

with open('src/pages/pouch/PouchShopPage.tsx', 'r') as f:
    content = f.read()

# Add Bottle shape
content = content.replace("{ id: 'Rollstock', label: 'Rollstock' },", "{ id: 'Rollstock', label: 'Rollstock' },\n  { id: 'Bottle', label: 'Bottle' },")

# Add SUSTAINABILITIES list
sustainabilities_code = """
const SUSTAINABILITIES = [
  { id: 'all', label: 'All Levels' },
  { id: 'conventional', label: 'Conventional' },
  { id: 'recyclable', label: 'Recyclable' },
  { id: 'compostable', label: 'Compostable' },
  { id: 'reusable', label: 'Reusable' },
];
"""
content = content.replace("export default function PouchShopPage() {", sustainabilities_code + "\nexport default function PouchShopPage() {")

# Add state and search params
content = content.replace("const activeShape = searchParams.get('shape') || 'all';", 
"""const activeShape = searchParams.get('shape') || 'all';
  const activeSustainability = searchParams.get('sustainability') || 'all';""")

content = content.replace("const setActiveShape = (shape: string) => {",
"""const setActiveSustainability = (sus: string) => {
    setSearchParams(prev => {
      if (sus === 'all') prev.delete('sustainability');
      else prev.set('sustainability', sus);
      return prev;
    });
  };

  const setActiveShape = (shape: string) => {""")

# Update filtering logic
content = content.replace("return matchesCategory && matchesShape;",
"""const matchesSustainability = activeSustainability === 'all' || 
      (p as any).sustainability === activeSustainability;

    return matchesCategory && matchesShape && matchesSustainability;""")

# Add to desktop sidebar
desktop_shape_sidebar = """<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                <Filter className="w-6 h-6" strokeWidth={3} />
                <h2 className="text-2xl font-black uppercase tracking-tight">Shapes</h2>"""

desktop_sus_sidebar = """<div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <div className="flex items-center gap-2 mb-6 border-b-4 border-black pb-4">
                <Filter className="w-6 h-6" strokeWidth={3} />
                <h2 className="text-2xl font-black uppercase tracking-tight">Sustainability</h2>
              </div>
              <div className="flex flex-col gap-2">
                {SUSTAINABILITIES.map(sus => (
                  <button
                    key={sus.id}
                    onClick={() => setActiveSustainability(sus.id)}
                    className={`text-left px-4 py-3 font-['JetBrains_Mono'] font-bold text-sm transition-colors border-2 ${
                      activeSustainability === sus.id 
                        ? 'bg-[#00FF00] text-black border-black' 
                        : 'bg-white border-transparent hover:border-black hover:bg-[#F0F0F0]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="capitalize">{sus.label}</span>
                      {activeSustainability === sus.id && <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            """

content = content.replace(desktop_shape_sidebar, desktop_sus_sidebar + desktop_shape_sidebar)

# Add to mobile sidebar
mobile_shape_sidebar = """<div className="border-t border-black pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4" strokeWidth={3} />
                  <span className="font-black uppercase text-xs tracking-wider">Shapes</span>"""

mobile_sus_sidebar = """<div className="border-t border-black pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-4 h-4" strokeWidth={3} />
                  <span className="font-black uppercase text-xs tracking-wider">Sustainability</span>
                  {activeSustainability !== 'all' && (
                    <span className="text-[10px] bg-[#00FF00] text-black font-['JetBrains_Mono'] px-1.5 py-0.5 ml-auto font-bold uppercase">
                      {SUSTAINABILITIES.find(s => s.id === activeSustainability)?.label}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-2 px-2">
                  {SUSTAINABILITIES.map(sus => (
                    <button
                      key={sus.id}
                      onClick={() => setActiveSustainability(sus.id)}
                      className={`whitespace-nowrap px-3 py-1.5 font-['JetBrains_Mono'] font-bold text-[10px] transition-colors border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                        activeSustainability === sus.id 
                          ? 'bg-[#00FF00] text-black' 
                          : 'bg-white text-black hover:bg-[#F0F0F0]'
                      }`}
                    >
                      {sus.label}
                    </button>
                  ))}
                </div>
              </div>
              
              """

content = content.replace(mobile_shape_sidebar, mobile_sus_sidebar + mobile_shape_sidebar)


with open('src/pages/pouch/PouchShopPage.tsx', 'w') as f:
    f.write(content)

print("Updated PouchShopPage.tsx")
