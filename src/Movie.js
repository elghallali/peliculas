export default function Movie(props){
    return (
        <div className="movie-item-style-2">
					<img src={props.img} alt=""/>
					<div className="mv-item-infor">
						<h6><a href="moviesingle.html">
							{
								props.title
							}
							</a></h6>
						<p className="rate"><i className="ion-android-star"></i>
							{props.classification}
						</p>
						<p className="describe">{props.children}</p>
						<p className="run-time"> Run Time: {props.duration}    .     <span>MMPA: PG-13 </span>    .     <span>Release: {props.date}</span></p>
						<p>Director: <a href="#director">{props.director}</a></p>
						<p>Stars: <a href="#actors">{props.actors}</a></p>
					</div>
				</div>
    )
}