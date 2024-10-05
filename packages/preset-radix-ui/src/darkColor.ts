import type { ColorValue, Context } from '@twind/core'
import type { BaseTheme as ImportedBaseTheme } from '@twind/core'
type BaseTheme = ImportedBaseTheme;



//
export default function darkColor<Theme extends BaseTheme = BaseTheme>(
  section: string,
  key: string,
  { theme }: Context<Theme>,
): ColorValue | undefined {
  return theme(section, key.replace(/^([a-z]+)($|[.-])/, '$1Dark$2')) as ColorValue
}
