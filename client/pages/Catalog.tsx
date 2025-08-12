import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Catalog() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="container py-16">
        <div className="text-center">
          <h1 className="font-serif text-h1 font-bold mb-4">Каталог ароматов</h1>
          <p className="text-muted mb-8">Эта страница находится в разработке</p>
          <Link 
            to="/" 
            className="inline-flex items-center text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться на главную
          </Link>
        </div>
      </div>
    </div>
  );
}
