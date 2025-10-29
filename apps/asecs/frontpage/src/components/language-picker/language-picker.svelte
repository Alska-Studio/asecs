<script lang="ts" module>
  export interface LanguagePickerProps {
  }
</script>

<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { css } from '@agapi/ui/panda/css';

  import { locales, getLocale } from '$lib/parachute/runtime';
  import { localizeUrl, delocalizeUrl } from '$lib/parachute/routes';

  import * as m from '$lib/parachute/messages';

  let currentLanguage = $state(getLocale());

  const languages: Record<string, string> = locales.reduce<Record<string, string>>((acc, locale) => {
    acc[locale] = (m as Record<string, Function>)[`${locale}Language`]();
    return acc;
  }, {});

  const handleLanguageSwitch = async (newLanguage: string) => {
    if (newLanguage === currentLanguage) {
      return;
    }

    const currentUrl = page.url;
    const delocalizedHref = delocalizeUrl(currentUrl.href);
    const newLocalizedUrl = localizeUrl(delocalizedHref, newLanguage);

    currentLanguage = newLanguage;

    await goto(newLocalizedUrl, { replaceState: false });
  };
</script>

<div class="language-picker" role="group" aria-label="Language selection">
  {#each Object.entries(languages) as [language, name] (language)}
    <div
      role="button"
      tabindex={0}
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleLanguageSwitch(language);
        }
      }}
      onclick={() => handleLanguageSwitch(language)}
      aria-label="Switch to {name}"
      class={css({
        padding: '0.5rem',
        fontSize: 'xs',
        fontWeight: language === currentLanguage ? 'bold' : 'normal',
        borderColor: language === currentLanguage ? 'grey.300' : 'grey.500',
        borderWidth: '1px',
        outline: 'none',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          borderColor: 'gray.300',
        },
        '&:focus': {
          borderColor: 'gray.300',
        },
        cursor: 'pointer',
        userSelect: 'none'
      })}
    >
      {language}
    </div>
  {/each}
</div>

<style>
  .language-picker {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
</style>

