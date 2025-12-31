import { useEffect, useRef, useState } from 'react';
import { MapPin, Users, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomerAddress {
  id: number;
  name: string;
  email: string;
  fullAddress: string;
  country: string;
  lat: number;
  lng: number;
}

const customerAddresses: CustomerAddress[] = [
  { id: 1, name: "B Devin Davis", email: "ddavis@seraworx.com", fullAddress: "583 S 330 W, Providence, UT 84332, United States", country: "United States", lat: 41.7063, lng: -111.8172 },
  { id: 2, name: "EcoBarker (Nichole Ashley)", email: "hello@ecobarker.com", fullAddress: "15631 Easthaven Ct, Bowie, MD 20716-2608, United States", country: "United States", lat: 38.9570, lng: -76.7316 },
  { id: 3, name: "Phaedra Brown", email: "yvetteimport@yahoo.com", fullAddress: "55 W 116th Street #406, New York, NY 10026, United States", country: "United States", lat: 40.8019, lng: -73.9530 },
  { id: 4, name: "Ravi Patrl", email: "ravipatel890970@gmail.com", fullAddress: "79 Poplar Avenue, Peterborough, Cambridgeshire PE1 4QF, United Kingdom", country: "United Kingdom", lat: 52.5732, lng: -0.2420 },
  { id: 5, name: "Ochre Dough (Mikaela Egan)", email: "admin@ochredough.com.au", fullAddress: "17 Melrose Circuit, Shepparton, VIC 3630, Australia", country: "Australia", lat: -36.3833, lng: 145.4000 },
  { id: 6, name: "Tea Craft (ARTHUR TONG)", email: "accounts@teacraft.com.au", fullAddress: "Unit 2, Lidcombe, NSW 2141, Australia", country: "Australia", lat: -33.8642, lng: 151.0458 },
  { id: 7, name: "Haruna Chinen", email: "harunachinen1@gmail.com", fullAddress: "Unit 3, 17 Britannia Avenue, Broadbeach, QLD 4218, Australia", country: "Australia", lat: -28.0289, lng: 153.4297 },
  { id: 8, name: "Simply Collagen (Blair Dods)", email: "hello@simplycollagen.co.nz", fullAddress: "62 Blackberry Way, Welcome Bay, Tauranga 3175, New Zealand", country: "New Zealand", lat: -37.7333, lng: 176.1167 },
  { id: 9, name: "Sparky Ltd (Sarah Parkes)", email: "chipbuddies2024@gmail.com", fullAddress: "1235 Moutere Highway RD1, Tasman 7173, New Zealand", country: "New Zealand", lat: -41.2667, lng: 173.0833 },
  { id: 10, name: "Andrew Goldfarb", email: "andrewsgoldfarb@gmail.com", fullAddress: "177 9th Avenue Unit 3J, New York, NY 10011, United States", country: "United States", lat: 40.7422, lng: -74.0027 },
  { id: 11, name: "Christopher Maaß", email: "christopher.maass@gmail.com", fullAddress: "Im Hornisgrund 19, 14055 Berlin, Germany", country: "Germany", lat: 52.5167, lng: 13.2500 },
  { id: 12, name: "SUPERFINE CHOCOLATE (Nadine Burie)", email: "nadine@likklemorechocolate.com", fullAddress: "69 Constant Spring Rd, Kingston, St. Andrew, Jamaica", country: "Jamaica", lat: 18.0179, lng: -76.7874 },
  { id: 13, name: "Jacob GILSON", email: "jacobgilson1@gmail.com", fullAddress: "401 Hicks Street Apt B6A, Brooklyn, NY 11201, United States", country: "United States", lat: 40.6892, lng: -73.9972 },
  { id: 14, name: "Marius Bondor", email: "mariussamuel.bondor@gmail.com", fullAddress: "Via della Repubblica 7, 56035 Casciana Terme Lari PI, Italy", country: "Italy", lat: 43.5667, lng: 10.5833 },
  { id: 15, name: "Mark Davidson", email: "mdd0021@gmail.com", fullAddress: "1068 E 3rd Ave, Salt Lake City, UT 84103, United States", country: "United States", lat: 40.7608, lng: -111.8660 },
  { id: 16, name: "Alfred Fox", email: "Alfox2011@gmail.com", fullAddress: "1248 Lexington Ave, Schenectady, NY 12309, United States", country: "United States", lat: 42.8142, lng: -73.9396 },
  { id: 17, name: "Anthony Leto", email: "TONY@TONYLETO.COM", fullAddress: "432 San Benito Ave, Los Gatos, CA 95030, United States", country: "United States", lat: 37.2358, lng: -121.9624 },
  { id: 18, name: "Ryan (Hong Kong)", email: "ryan@achievepack.com", fullAddress: "No.41, 1/F, Wo Liu Hang Tsuen, Fotan, Hong Kong", country: "Hong Kong", lat: 22.3964, lng: 114.1095 }
];

const countryColors: Record<string, string> = {
  "United States": "#3B82F6",
  "Australia": "#22C55E",
  "New Zealand": "#06B6D4",
  "United Kingdom": "#8B5CF6",
  "Germany": "#F59E0B",
  "Italy": "#EF4444",
  "Jamaica": "#EC4899",
  "Hong Kong": "#F97316"
};

declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

export default function CustomerMapPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerAddress | null>(null);
  const [isListOpen, setIsListOpen] = useState(true);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 20, lng: 0 },
        zoom: 2,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#8ec3b9" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#1a3646" }] },
          { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#0e1626" }] },
          { featureType: "road", elementType: "geometry", stylers: [{ color: "#304a7d" }] },
          { featureType: "poi", stylers: [{ visibility: "off" }] }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
      });

      setMap(mapInstance);
      setMapLoaded(true);

      const newMarkers: any[] = [];
      const infoWindow = new window.google.maps.InfoWindow();

      customerAddresses.forEach((customer) => {
        const marker = new window.google.maps.Marker({
          position: { lat: customer.lat, lng: customer.lng },
          map: mapInstance,
          title: customer.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: countryColors[customer.country] || "#3B82F6",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
            scale: 10
          },
          animation: window.google.maps.Animation.DROP
        });

        marker.addListener("click", () => {
          setSelectedCustomer(customer);
          infoWindow.setContent(`
            <div style="padding: 8px; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1f2937;">${customer.name}</h3>
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #6b7280;">${customer.email}</p>
              <p style="margin: 0; font-size: 13px; color: #374151;">${customer.fullAddress}</p>
            </div>
          `);
          infoWindow.open(mapInstance, marker);
          mapInstance.panTo({ lat: customer.lat, lng: customer.lng });
          mapInstance.setZoom(12);
        });

        newMarkers.push(marker);
      });

      setMarkers(newMarkers);
    };

    if (window.google && window.google.maps) {
      initMap();
      return;
    }

    window.initMap = initMap;
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDwWPxiT5mAYD6_9wxhtMn39X8gvDuH0Lk&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      markers.forEach(marker => marker.setMap(null));
    };
  }, []);

  const handleCustomerClick = (customer: CustomerAddress) => {
    setSelectedCustomer(customer);
    if (map) {
      map.panTo({ lat: customer.lat, lng: customer.lng });
      map.setZoom(14);
      
      markers.forEach((marker, index) => {
        if (customerAddresses[index].id === customer.id) {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(() => marker.setAnimation(null), 2000);
        }
      });
    }
  };

  const resetView = () => {
    if (map) {
      map.setCenter({ lat: 20, lng: 0 });
      map.setZoom(2);
      setSelectedCustomer(null);
    }
  };

  const countryStats = customerAddresses.reduce((acc, customer) => {
    acc[customer.country] = (acc[customer.country] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="h-6 w-6 text-blue-400" />
            <h1 className="text-xl font-bold">Customer Locations Map</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Users className="h-4 w-4" />
              <span>{customerAddresses.length} Customers</span>
            </div>
            <button 
              onClick={resetView} 
              className="px-3 py-1.5 text-sm border border-gray-600 rounded-md hover:bg-gray-700 text-white transition-colors"
            >
              Reset View
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)] relative">
        <div className={`${isListOpen ? 'w-96' : 'w-0'} transition-all duration-300 overflow-hidden bg-gray-800 border-r border-gray-700 flex-shrink-0`}>
          <div className="p-4 w-96">
            <div className="mb-4 p-3 bg-gray-700/50 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-300 mb-2">Customers by Country</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(countryStats).map(([country, count]) => (
                  <div 
                    key={country}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs"
                    style={{ backgroundColor: `${countryColors[country]}20`, color: countryColors[country] }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: countryColors[country] }}></span>
                    <span>{country}: {count}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-300 mb-2">Customer List</h3>
            <div className="h-[calc(100vh-280px)] overflow-y-auto custom-scrollbar">
              <div className="space-y-2 pr-2">
                {customerAddresses.map((customer) => (
                  <div
                    key={customer.id}
                    onClick={() => handleCustomerClick(customer)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedCustomer?.id === customer.id 
                        ? 'bg-blue-600/20 border border-blue-500' 
                        : 'bg-gray-700/50 hover:bg-gray-700 border border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${countryColors[customer.country]}30` }}
                      >
                        <MapPin className="h-4 w-4" style={{ color: countryColors[customer.country] }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-white truncate">{customer.name}</h4>
                        <p className="text-xs text-gray-400 truncate">{customer.email}</p>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{customer.fullAddress}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsListOpen(!isListOpen)}
          className="absolute top-1/2 -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-600 p-1.5 rounded-r-lg border border-l-0 border-gray-600 transition-all duration-300"
          style={{ left: isListOpen ? '384px' : '0px' }}
        >
          {isListOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>

        <div className="flex-1 relative">
          <div ref={mapRef} className="w-full h-full" />
          
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-400">Loading map...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
