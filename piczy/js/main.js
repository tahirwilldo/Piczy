/*

    author: Kumar Shashwat
    github profile: http://www.github.com/shashutech

*/

document.querySelector('#searchForm').addEventListener('submit', searchImg);
var searchResult = document.querySelector('#searchResult');

function searchImg(e) {
    e.preventDefault();
    var searchText = document.querySelector('#searchText').value;
    axios.get('https://pixabay.com/api/?key=9955693-a3e539d45cd91c21499fe9a9f&q=' + searchText + '&image_type=photo&pretty=true')
        .then(function (response) {
            var images = response.data.hits;
            var output = "";
            $.each(images, (index, image) => {
                output += `

                    

                    <div class="col-sm-12 col-md-4 bg-secondary">
                        <div class="image">
                          <a href="${image.largeImageURL}"
                              data-toggle="lightbox">
                              <img src="${image.largeImageURL}"
                                  alt="" class="img-fluid overlay-image"></a>
                                  <div class="overlay">
                                      <div class="overlay-content">
                                          <div class="overlay-icons">
                                            <div>
                                              <i class="fas fa-heart"></i> ${image.likes}
                                            </div>
                                            <div>
                                              <i class="fas fa-comment-dots"></i> ${image.comments}
                                            </div>
                                            <div>
                                              <i class="fas fa-download"></i> ${image.downloads}
                                            </div>
                                          </div>

                                          <a href="${image.pageURL}" class="btn btn-primary  text-center" download>Download Image</a>
                                      </div>
                                  </div>
                        </div>

                    </div>

                `;
            })
            searchResult.innerHTML = output;
        })
        .catch(function (error) {
            var output = `
                <div class="container">
                    <h3>We did not find anything for your searched term. Please search something else.</h3>
                </div>`;
            searchResult.innerHTML = output;
        });
}


// LightBox
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
