import re

content = """
        <img 
          src="/imgs/blog/heros/sustainable-flexible-packaging-for-powders-hero.png" 
          alt="{title}" 
"""
images = re.findall(r'(/imgs/[^"\'>\s]+(?:\.webp|\.png|\.jpg))', content)
print(images)
