const str = `curbside-recyclable <a href=\\"/blog/mono-pe-vs-<a href=\\"/blog/mono-pe-vs-mono-pp\\" class=\\"text-[#10b981] font-bold hover:underline\\">mono-pp</a>\\" class=\\"text-[#10b981] font-bold hover:underline\\">Mono-PE</a>`

const nestedRegex = /<a href=\\"[^\\"]*<a href=\\"([^\\"]*)\\"[^>]*>[^<]*<\/a>[^\\"]*\\"[^>]*>([^<]*)<\/a>/g

const replaced = str.replace(nestedRegex, '<a href=\\"$1\\" class=\\"text-[#10b981] font-bold hover:underline\\">$2</a>')
console.log('Replaced:', replaced)
