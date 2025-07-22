import { Icon } from '@iconify/react';

type Props = {
  src: string;
  name: string;
};

const SkillIcon = ({ src, name }: Props) => {
  return (
    <div className="relative grid text-2xl rounded-full shadow-md bg-bg-secondary dark:shadow-xl h-14 w-14 sm:h-16 sm:w-16 place-items-center group">
      <Icon icon={src} width="32" height="32" />
      <div className="absolute invisible px-2 py-1 text-sm text-text capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-bg dark:bg-bg-secondary dark:text-text">
        {name}
        <svg
          className="absolute left-0 w-full h-2 text-bg dark:text-bg-secondary top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default SkillIcon;
