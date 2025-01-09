import { CINEMA_BRANDS } from '@mmcinema-ui/shared-common';
import { useCinemaBrandStore } from '@mmcinema-ui/shared-stores';

const CinemaBrandSelector = () => {

  const { selectedBrand, setSelectedBrand } = useCinemaBrandStore();

  return (
    <div
      className="hidden relative -mx-5 border-b border-gray-200 bg-white md:block md:top-0 md:mx-0 pb-2 pt-3 px-5 lg:px-3">
      <div className="flex">
        <div className={`w-16 mr-[2px] cursor-pointer flex flex-col items-center`}
             onClick={() => setSelectedBrand('All')}
        >
          <div
            className={`mx-auto flex h-12 w-12 items-center justify-center overflow-hidden border bg-white border-gray-200 ${selectedBrand === 'All' ? 'border-pink-600' : ''}`}
            style={{ borderRadius: 8 }}>
            <img className="" src="/dexuat-icon.svg" alt="De xuat" />
          </div>
          <span
            className={`${selectedBrand === 'All' ? 'text-pink-600 font-semibold' : ''} truncate w-full text-center ml-1 mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-500`}>All</span>
        </div>
        {
          CINEMA_BRANDS.map((brand) => {
            return <div className={`w-16 mr-[2px] cursor-pointer flex flex-col items-center`}
                        key={brand.name}
                        onClick={() => setSelectedBrand(brand.name)}
            >
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center overflow-hidden border bg-white border-gray-200 ${brand.name === selectedBrand ? 'border-pink-600' : ''}`}
                style={{ borderRadius: 8 }}>
                <img className="" src={brand.logo_url} alt={brand.name} />
              </div>
              <span
                className={`${brand.name === selectedBrand ? 'text-pink-600 font-semibold' : ''} truncate w-full text-center ml-1 mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-500`}>{brand.name}</span>
            </div>;
          })
        }
      </div>
    </div>
  );
};

export default CinemaBrandSelector;
