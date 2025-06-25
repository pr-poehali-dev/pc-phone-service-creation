import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-dark-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Wrench" size={24} />
              <span className="text-xl font-bold">ТехСервис</span>
            </div>
            <p className="text-gray-300">
              Профессиональный ремонт компьютеров и мобильных устройств
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Ремонт ПК</li>
              <li>Ремонт телефонов</li>
              <li>Диагностика</li>
              <li>Восстановление данных</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@techservice.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>ул. Техническая, 1</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Режим работы</h3>
            <div className="space-y-2 text-gray-300">
              <div>Пн-Пт: 9:00 - 19:00</div>
              <div>Сб: 10:00 - 16:00</div>
              <div>Вс: выходной</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          © 2024 ТехСервис. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
