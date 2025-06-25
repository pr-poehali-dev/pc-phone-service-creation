import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Award",
      title: "Опыт 10+ лет",
      description:
        "Наши мастера имеют многолетний опыт работы с техникой любой сложности",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description:
        "Предоставляем гарантию на все виды работ от 3 месяцев до 1 года",
    },
    {
      icon: "Clock",
      title: "Быстрый ремонт",
      description: "Большинство неисправностей устраняем в день обращения",
    },
    {
      icon: "Wrench",
      title: "Оригинальные запчасти",
      description:
        "Используем только качественные комплектующие от проверенных поставщиков",
    },
    {
      icon: "Truck",
      title: "Выезд мастера",
      description:
        "Можем приехать к вам домой или в офис для диагностики и ремонта",
    },
    {
      icon: "CreditCard",
      title: "Удобная оплата",
      description:
        "Принимаем наличные, карты, переводы. Оплата после выполнения работ",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-purple mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы заботимся о каждом клиенте и гарантируем высокое качество услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={advantage.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-dark-purple">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
