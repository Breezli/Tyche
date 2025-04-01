import { type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { omit } from 'lodash-es'
import English from '@veyra/locale/lang/en'
import type { Language } from '@veyra/locale'

// 定义返回值类型
interface LocaleResult {
	t: (key: string) => string // 翻译函数
	locale: Ref<string> // 当前语言环境
	messages: Record<string, any> // 当前语言包
}

export function useLocale(localeOverrides?: Ref<Language>): LocaleResult {
	const { t, locale, messages } = useI18n()

	// 如果没有传入 localeOverrides，则使用默认语言
	if (!localeOverrides) {
		locale.value = English.name // 设置默认语言
		return omit({ t, locale, messages }, 'install') as LocaleResult
	}

	// 如果传入了 localeOverrides，则动态设置语言
	locale.value = localeOverrides.value.name

	// 动态更新 messages
	Object.assign(messages.value, {
		en: English.el,
		[localeOverrides.value.name]: localeOverrides.value.el,
	})

	return omit({ t, locale, messages }, 'install') as LocaleResult
}

export default useLocale
