import { Container, Filters, ProductGroupList, Title, TopBar } from '@/components/shared';
import { ProductCart } from '@/components/shared/product-cart';

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCart
                id={0}
                name="4 сыра"
                price={500}
                imageUrl={
                  'https://home-pizza.com/media/_versions_/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5_%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B8%D1%86%D1%86%D1%8B/polyakovfoto_%D1%85%D0%BE%D1%83%D0%BC_%D0%BF%D0%B8%D1%86%D1%86%D0%B013399_2_(1)_catalog_product_detail.jpg'
                }
              /> */}
              <ProductGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер',
                    imageUrl:
                      'https://home-pizza.com/media/_versions_/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5_%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B8%D1%86%D1%86%D1%8B/polyakovfoto_%D1%85%D0%BE%D1%83%D0%BC_%D0%BF%D0%B8%D1%86%D1%86%D0%B013399_2_(1)_catalog_product_detail.jpg',
                    price: 550,
                  },
                ]}
              />
            </div>{' '}
          </div>
        </div>
      </Container>
    </>
  );
}
