import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faFacebook,
	faRedditAlien
} from '@fortawesome/free-brands-svg-icons';

const shareLinks = ({ title, slug, size }) => {
	return (
		<div className="field is-grouped is-grouped-centered">
			<p className="control">
				<a
					title="Share on Twitter"
					href={`https://twitter.com/intent/tweet?text=Check out this article 👉 ${title} on https://blog.agktf.com${slug}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						icon={faTwitter}
						size={size}
						style={{ color: '#5AA1F2' }}
					/>
				</a>
			</p>
			<p className="control">
				<a
					title="Share On Facebook"
					href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.agktf.com${slug}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						icon={faFacebook}
						size={size}
						style={{ color: '#3C5A99' }}
					/>
				</a>
			</p>
			<p className="control">
				<a
					title="Share On Reddit"
					href={`http://www.reddit.com/submit?url=https://blog.agktf.com${slug}&title=${title}&text=Check out this article 👉 ${title}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						icon={faRedditAlien}
						size={size}
						style={{ color: '#EA4302' }}
					/>
				</a>
			</p>
		</div>
	);
};

export default shareLinks;
