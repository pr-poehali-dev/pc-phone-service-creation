import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-dark-purple via-primary to-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Весь спектр услуг
            <br />
            <span className="text-light-purple">от А до Я</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Профессиональный ремонт компьютеров, ноутбуков, телефонов и
            планшетов. Диагностика бесплатно, гарантия на все работы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-dark-purple hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать мастера
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark-purple text-lg px-8 py-4"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Узнать стоимость
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="Clock"
                size={32}
                className="mx-auto mb-2 text-light-purple"
              />
              <div className="font-semibold">Быстро</div>
              <div className="text-sm text-gray-300">От 30 минут</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="Shield"
                size={32}
                className="mx-auto mb-2 text-light-purple"
              />
              <div className="font-semibold">Качественно</div>
              <div className="text-sm text-gray-300">Гарантия до 1 года</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Icon
                name="Truck"
                size={32}
                className="mx-auto mb-2 text-light-purple"
              />
              <div className="font-semibold">Удобно</div>
              <div className="text-sm text-gray-300">Выезд на дом</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
