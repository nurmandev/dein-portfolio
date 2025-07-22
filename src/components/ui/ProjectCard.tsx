'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div
      {...rest}
    className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl"
    >
      <div className="overflow-hidden h-[200px]">
        <Image
          src={img}
          alt={name}
          width={400}
          height={250}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 py-3 space-y-1">
        <p className="font-mono text-xs capitalize">{tags.join(' | ')}</p>
        <h4 className="flex justify-between font-medium capitalize group-hover:text-accent duration-200">
          <span>{name}</span>
          <span className="mr-1">{year}</span>
        </h4>
      </div>
    </motion.div>
  ) : null;
};

export default ProjectCard;
