import raw from '../../../content/site.config.json';

export type Gender = 'male' | 'female' | 'neutral';

export type SiteConfig = {
  report?: {
    title?: string;
    subjectLine?: string;
  };
  student: {
    fullName: string;
    group: string;
    gender: Gender;
    photo?: string;
  };
  toc: {
    minDepth: number;
    maxDepth: number;
  };
  labs: Array<{
    slug: string;
    title: string;
    button: string;
  }>;
};

export const config = raw as SiteConfig;

export function performerTitleLine(student: SiteConfig['student']): string {
  const noun =
    student.gender === 'female'
      ? 'Студентка'
      : student.gender === 'neutral'
        ? 'Студент(ка)'
        : 'Студент';

  return `Виконавець: ${noun} групи ${student.group} — ${student.fullName}`;
}
