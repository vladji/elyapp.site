import { FC } from 'react';
import { Card } from '../Card';
import { useLang } from '../../hooks/useLang';
import styles from './styles.module.scss';

export const ProductBlock: FC = () => {
  return (
    <section>
      <Card>
        <h2 className={styles.title}>{useLang('product.title')}</h2>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>{useLang('product.var1.title')}</h3>
          <ul>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>
                    работа с МАК (метафоричкские ассоциативеные карты) + коуч сессия для глубинной проработки и решения проблемы лишнего веса в корне
                </span>
              </div>
            </li>
          </ul>
          <div className={styles.itemConditions}>
            <p className={styles.itemPeriod}>{useLang('product.var1.period')}</p>
            <p className={styles.itemPrice}>{useLang('product.var1.price')}</p>
          </div>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>{useLang('product.var2')}</h3>
          <ul>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>
                    проработка пищевого поведения и лишнего веса
                  </span>
              </div>
            </li>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>
                    работа по диетологии (формирование здорового меню, рецепты, продуктоведение)
                  </span>
              </div>
            </li>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>
                    рекомендации по физической активности, уходу за кожей, анти стресс и в целом по зож
                  </span>
              </div>
            </li>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>
                    сопровождение процесса похудения, контроль результатов
                </span>
              </div>
            </li>
          </ul>
          <div className={styles.itemConditions}>
            <p className={styles.itemPeriod}>{useLang('product.var2.v1.period')}</p>
            <p className={styles.itemPrice}>{useLang('product.var2.v1.price')}</p>
          </div>
          <div className={styles.itemConditions}>
            <p className={styles.itemPeriod}>{useLang('product.var2.v2.period')}</p>
            <p className={styles.itemPrice}>{useLang('product.var2.v2.price')}</p>
          </div>
        </div>
        <div className={styles.item}>
          <h3 className={styles.itemTitle}>{useLang('product.var3')}</h3>
          <ul>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>{useLang('product.bul1')}</span>
              </div>
            </li>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>{useLang('product.bul2')}</span>
              </div>
            </li>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>{useLang('product.bul3')}</span>
              </div>
            </li>
            <li>
              <div className={styles.itemDetail}>
                <span>-&nbsp;</span>
                <span>{useLang('product.bul4')}</span>
              </div>
            </li>
          </ul>
          <div className={styles.itemConditions}>
            <p className={styles.itemPeriod}>{useLang('product.var3.period')}</p>
            <p className={styles.itemPrice}>{useLang('product.var3.price')}</p>
          </div>
        </div>
      </Card>
    </section>
  );
};
