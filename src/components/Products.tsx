import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import tomatoImage from "@/assets/tomato-seedlings.jpg";
import onionImage from "@/assets/onion-seedlings.jpg";
import cabbageImage from "@/assets/cabbage-seedlings.jpg";
import pepperImage from "@/assets/pepper-seedlings.jpg";

const products = [
  {
    id: 1,
    name: "Tomato Seedlings",
    image: tomatoImage,
    varieties: ["Hybrid F1 Trinity", "Tengeru Select", "Other Hybrids"],
    description: "Disease-resistant tomato seedlings with high yield potential. Perfect for commercial and home gardens.",
    tags: ["Popular", "High Yield"]
  },
  {
    id: 2,
    name: "Onion Seedlings",
    image: onionImage,
    varieties: ["Red Creole", "Other Varieties"],
    description: "Strong and healthy onion seedlings adapted to local conditions. Fast-growing with excellent bulb development.",
    tags: ["Best Seller"]
  },
  {
    id: 3,
    name: "Cabbage Seedlings",
    image: cabbageImage,
    varieties: ["Green Cabbage", "Red Cabbage"],
    description: "Premium cabbage seedlings for both green and red varieties. Excellent head formation and disease resistance.",
    tags: ["Premium Quality"]
  },
  {
    id: 4,
    name: "Pepper Seedlings",
    image: pepperImage,
    varieties: ["Red Pepper", "Green Pepper"],
    description: "Vibrant and productive pepper seedlings. Suitable for various growing conditions with great fruit quality.",
    tags: ["High Demand"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Our Products</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quality Seedlings for Your Farm
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer a wide selection of healthy, strong seedlings ready to thrive in your fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {product.tags.map(tag => (
                    <Badge key={tag} className="bg-secondary text-secondary-foreground shadow-md">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Varieties:</p>
                  <ul className="space-y-1">
                    {product.varieties.map((variety, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                        {variety}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
