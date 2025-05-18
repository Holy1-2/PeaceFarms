// ProductDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
const products = [
  {
    id: 1,
    title: 'Heirloom Tomatoes',
    price: '$4.99',
    duration: '90 Days Growth',
    fertilizer: 'Organic Compost',
    image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924'
  },
  {
    id: 2,
    title: 'Organic Kale',
    price: '$3.49',
    duration: '60 Days Growth',
    fertilizer: 'Seaweed Extract',
    image: 'https://images.unsplash.com/photo-1578991624413-9107e3b96dae'
  },
  {
    id: 3,
    title: 'Rainbow Carrots',
    price: '$2.99',
    duration: '75 Days Growth',
    fertilizer: 'Vermicompost',
    image: 'https://images.unsplash.com/photo-1598179265053-eda6131f4a91'
  },
];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-[#F8FAF9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-playfair text-[#1F3F2D]">
                {product.title}
              </h1>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#1F3F2D]">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="font-semibold">Growth Duration:</span>
                  <span>{product.duration}</span>
                </div>

                <div className="flex items-center gap-3 text-[#1F3F2D]">
                 
                  <span className="font-semibold">Fertilizers Used:</span>
                  <span>{product.fertilizer}</span>
                </div>

                <div className="bg-[#1F3F2D]/10 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Harvest Details</h3>
                  <p className="text-[#1F3F2D]">{product.harvestTime}</p>
                </div>

                <div className="bg-[#C1D8C3]/20 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Key Nutrients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.nutrients.map((nutrient, index) => (
                      <span 
                        key={index}
                        className="bg-[#1F3F2D] text-white px-3 py-1 rounded-full text-sm"
                      >
                        {nutrient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Link
                  to={`/contact?product=${encodeURIComponent(product.title)}`}
                  className="bg-[#1F3F2D] text-white px-8 py-3 rounded-full hover:bg-[#2D5540] transition-colors flex items-center gap-2"
                >
               
                  Request Quote
                </Link>
                
                <button className="border-2 border-[#1F3F2D] text-[#1F3F2D] px-8 py-3 rounded-full hover:bg-[#1F3F2D] hover:text-white transition-colors flex items-center gap-2">
             
                  Share Product
                </button>
              </div>
            </div>
          </div>

          {/* Nutrition Facts Accordion */}
          <div className="border-t p-8">
            <h3 className="text-2xl font-playfair mb-4">Nutrition Facts</h3>
            <div className="space-y-2">
              <div className="flex justify-between border-b py-2">
                <span>Calories</span>
                <span className="text-[#1F3F2D]">25kcal</span>
              </div>
              {/* Add more nutrition facts */}
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-playfair mb-8">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map through related products */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;