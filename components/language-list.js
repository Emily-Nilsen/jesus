import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const LanguageList = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              {locale === 'es' ? 'Español' : 'English'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
