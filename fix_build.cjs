const fs = require('fs');

function replaceFile(path, regex, replacement) {
  let content = fs.readFileSync(path, 'utf-8');
  let original = content;
  content = content.replace(regex, replacement);
  if (content !== original) {
    fs.writeFileSync(path, content);
    console.log('Fixed', path);
  }
}

// 1. AchievePouchEcoDemoPage - ease: number[]
replaceFile('src/pages/free-service/AchievePouchEcoDemoPage.tsx', /ease: \[[^\]]+\](?: as const)?/g, 'ease: "easeOut" as any');

// 2. user-presence-avatar.tsx - side
replaceFile('src/components/animate-ui/components/community/user-presence-avatar.tsx', /side="[^"]+"/g, '');

// 3. popover.tsx - AnimationGeneratorType
replaceFile('src/components/animate-ui/components/radix/popover.tsx', /transition={{ type: "spring"[^}]*}}/g, 'transition={{ type: "spring" as any, stiffness: 260, damping: 20 }}');

// 4. tooltip.tsx - ref issue
replaceFile('src/components/animate-ui/primitives/animate/tooltip.tsx', /ref=\{ref\}/g, 'ref={ref as any}');
replaceFile('src/components/animate-ui/primitives/animate/tooltip.tsx', /ref: ref,/g, 'ref: ref as any,');

// 5. button.tsx - ref issue
replaceFile('src/components/animate-ui/primitives/buttons/button.tsx', /ref=\{ref\}/g, 'ref={ref as any}');

// 6. auto-height.tsx - ref issue
replaceFile('src/components/animate-ui/primitives/effects/auto-height.tsx', /ref=\{ref\}/g, 'ref={ref as any}');

// 7. avatar-group.tsx - ref type
replaceFile('src/components/ui/avatar-group.tsx', /ref=\{ref\}/g, 'ref={ref as any}');

// 8. AchieveCleaningDemoPage.tsx - viewport delay
replaceFile('src/pages/free-service/AchieveCleaningDemoPage.tsx', /viewport={{ once: true, delay: ([0-9.]+) }}/g, 'viewport={{ once: true }} transition={{ delay: $1 }}');

// 9. AchieveHoneyDemoPage.tsx - viewport delay
replaceFile('src/pages/free-service/AchieveHoneyDemoPage.tsx', /viewport={{ once: true, delay: ([0-9.]+) }}/g, 'viewport={{ once: true }} transition={{ delay: $1 }}');

