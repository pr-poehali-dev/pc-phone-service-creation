import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              ТехноПлюс
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#advantages"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-500">Звоните прямо сейчас</div>
              <div className="font-semibold text-purple-600">
                +7 (999) 123-45-67
              </div>
            </div>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600">
                Услуги
              </a>
              <a href="#advantages" className="text-gray-600">
                Преимущества
              </a>
              <a href="#contact" className="text-gray-600">
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
