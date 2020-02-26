import React from 'react';
import './Copyright.scss';

const Copyright = () => {
    return (  
        <div className = "container text-center light mt-3">
            <h3>
                DeckRefactory is unofficial Fan Content permitted under the Fan Content Policy. 
                Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast.
                ©Wizards of the Coast LLC.
             </h3>
             <hr classname ="my-3"></hr>
             <p>
                All content we serve, both art and code, is provided as a free service to its users.
                As such, the distribution or propagation of the material or code on this website
                for your own needs, must remain free. 
            </p>

            <p>
                For both users' and authors' sake, you are required to mark modified versions as
                changed, so that their problems will not be attributed erroneously to
                authors of previous versions. Please bare respect to the original authors of such content 
                when necessary. In no event, shall previous authors that act as permitted with applicable law be held
                responsible by other parties who modify or distribute the content in an unlawful manner.
            </p>

            <hr className ="my-3"></hr>
            <h3>
                For more information, please view the GNU General Public License v3.0 that this content is licensed under.
            </h3>

            <a className = "copyright-link" href = "https://www.gnu.org/licenses/gpl-3.0.en.html">
               GNU General Public License 3
            </a>

            <a className = "copyright-link" href = "http://www.flaticon.com">
               All svg icons used were made by Freepik from www.flaticon.com
            </a>
        </div>
    );
}
 
export default Copyright;
