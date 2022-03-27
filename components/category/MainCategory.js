import FilterCheck from "./FilterCheck";
const MainCategory = () => {
    return (
<section class="trending-courses-area pd-top-135 pd-bottom-130">
        <div class="container">
            <div class="row">
                <FilterCheck/>
                <div class="col-lg-9">
                    <div class="row">
                        <div class="container my-2 t1 course">

                        </div>
                    </div>
                </div>
                {/* <!-- <div class="col-lg-12 text-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item"><a class="page-link" href="#">ก่อนหน้า</a></li>
                          <li class="page-item"><a class="page-link" href="#">1</a></li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">ถัดไป</a></li>
                        </ul>
                      </nav>
                </div> --> */}
            </div>
        </div>
    </section>
    );
}

export default MainCategory;