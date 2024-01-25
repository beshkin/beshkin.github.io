import {FC} from "react";
import block from "bem-css-modules";
import {Movie} from "../scripts/fetchMovies";
import s from './MoviePreview.module.scss';

interface Props {
    movie: Movie;
}

const b = block(s);

export const MoviePreview: FC<Props> = ({movie}) => {
    const {title, overview, image} = movie;
    const imageUrl = `https://image.tmdb.org/t/p/w500${image}`;

    return (<div className={b('card')}>
        <img src={imageUrl} alt="Avatar" className={b('image')}/>
        <div className={b('container')}>
            <h4><b>{title}</b></h4>
            <p>{overview}</p>
        </div>
    </div>);
};
