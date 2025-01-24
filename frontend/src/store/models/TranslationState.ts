export interface TranslationsState {
  locale: string;
  translations: Record<string, Record<string, string>>;
}