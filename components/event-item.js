import Link from 'next/link';
import Image from 'next/image';

const EventItem = ({ evt }) => {
  return (
    <div>
      <div
        key={feature.title}
        className="flex flex-col overflow-hidden rounded-lg"
      >
        <div className="flex-shrink-0">
          <Image
            className="object-cover w-full h-48"
            src={
              evt.image
                ? evt.image.data.attributes.formats.thumbnail.url
                : '/static/contact.jpg'
            }
            alt=""
            width={260}
            height={160}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
};

export default EventItem;
