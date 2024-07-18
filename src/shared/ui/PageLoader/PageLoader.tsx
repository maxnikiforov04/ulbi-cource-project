import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

// Default values shown

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }:PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <div>
            <Loader />
        </div>
    </div>
);
