import Image from "next/image";

export default function Categories({ category }) {
  return (
    <section className="sm:m-[40px]">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        {category.map((item, index) => (
          <div
            key={index}
            className="shadow-md cursor-pointer rounded-xl hover:scale-102 transition duration-300 "
          >
            <div className="min-w-[300px] h-[150px] relative overflow-hidden rounded-t-xl">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-green-700 text-center my-5 text-xl">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
