import {
  FileTs,
  FileJs,
  Palette,
  GitBranch,
  Database,
  Lightning,
  File,
  Cpu,
  Robot,
  ChatCircle,
  GridFour,
  Rocket,
  Code,
  Cloud,
  Check,
  GithubLogo,
  LinkedinLogo,
  DiscordLogo,
  FacebookLogo,
} from 'phosphor-react';
import type { ComponentType } from 'react';

// Ponytail: simple icon mapping - only imports what phosphor-react actually exports
export function getPhosphorIcon(
  iconName: string
): ComponentType<{ size?: number; weight?: string }> | null {
  const iconMap: Record<
    string,
    ComponentType<{ size?: number; weight?: string }>
  > = {
    react: Code,
    'file-ts': FileTs,
    'file-js': FileJs,
    palette: Palette,
    'git-branch': GitBranch,
    database: Database,
    lightning: Lightning,
    file: File,
    node: Cpu,
    'github-logo': GithubLogo,
    code: Code,
    cloud: Cloud,
    check: Check,
    robot: Robot,
    'chat-circle': ChatCircle,
    'grid-four': GridFour,
    rocket: Rocket,
    docker: Cpu,
    express: Code,
    'file-html': File,
    copilot: Code,
    flow: Lightning,
    'linkedin-logo': LinkedinLogo,
    'discord-logo': DiscordLogo,
    'facebook-logo': FacebookLogo,
  };

  return iconMap[iconName] || null;
}
