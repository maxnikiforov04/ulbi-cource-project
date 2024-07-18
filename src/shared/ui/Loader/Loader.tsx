import { grid } from 'ldrs';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

grid.register();
interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }:LoaderProps) => (
    <div className={classNames('loader', {}, [className])}>
        <l-grid
            size="120"
            speed="1.5"
            color="white"
        />
    </div>
);
