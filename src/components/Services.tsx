import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Monitor",
      title: "Ремонт ПК",
      description:
        "Диагностика и ремонт настольных компьютеров, замена комплектующих",
      price: "от 500 ₽",
      time: "30 мин - 2 дня",
    },
    {
      icon: "Laptop",
      title: "Ремонт ноутбуков",
      description: "Чистка, замена матрицы, клавиатуры, материнской платы",
      price: "от 800 ₽",
      time: "1-3 дня",
    },
    {
      icon: "Smartphone",
      title: "Ремонт телефонов",
      description:
        "Замена экранов, батарей, разъемов. Все модели iPhone и Android",
      price: "от 1000 ₽",
      time: "30 мин - 1 день",
    },
    {
      icon: "Tablet",
      title: "Ремонт планшетов",
      description:
        "Восстановление планшетов iPad, Samsung, Huawei и других брендов",
      price: "от 1200 ₽",
      time: "1-2 дня",
    },
    {
      icon: "Search",
      title: "Диагностика",
      description: "Полная диагностика устройства для выявления неисправностей",
      price: "Бесплатно",
      time: "15-30 мин",
    },
    {
      icon: "HardDrive",
      title: "Восстановление данных",
      description:
        "Спасение фотографий, документов, видео с поврежденных носителей",
      price: "от 2000 ₽",
      time: "1-7 дней",
    },
    {
      icon: "Download",
      title: "Установка ПО",
      description:
        "Установка Windows, программ, настройка системы и антивируса",
      price: "от 300 ₽",
      time: "30 мин - 2 часа",
    },
    {
      icon: "Wifi",
      title: "Настройка сети",
      description: "Настройка Wi-Fi, интернета, локальной сети и роутеров",
      price: "от 400 ₽",
      time: "30 мин - 1 час",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-purple mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональный ремонт и обслуживание всех видов техники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 hover:scale-105 duration-300"
            >
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4 text-gray-600">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-primary font-semibold text-lg">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    Время: {service.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
