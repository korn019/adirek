const CourseCard = () => {
  return (
    <>
      <div class="container mx-auto py-12 px-6 card card-side bg-base-200">
        <div className="bg-[rgb(245 245 245)]">
          <div class="space-y-4 lg:grid lg:grid-cols-3 lg:items-start lg:gap-6 lg:space-y-0">
            <a href="https://stackdiary.com/" class="group">
              <div class="aspect-w-3 aspect-h-2">
                <img
                  class="object-cover shadow-lg rounded-lg group-hover:opacity-75"
                  src="https://stackdiary.com/140x100.png"
                  alt="Featured Photo"
                />
              </div>
            </a>

            <div class="sm:col-span-2">
              <div class="flex items-center space-x-3">
                <div class="flex items-center space-x-2">
                  <span class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      class="mr-1.5 h-2 w-2 brand-react"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #1
                  </span>

                  <span class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      class="mr-1.5 h-2 w-2 brand-packages"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #2
                  </span>

                  <span class="inline-flex items-center leading-none px-2.5 py-1.5 text-sm font-medium text-skin-inverted rounded-full border border-skin-input">
                    <svg
                      class="mr-1.5 h-2 w-2 brand-tutoriel"
                      fill="currentColor"
                      viewBox="0 0 8 8"
                    >
                      <circle cx="4" cy="4" r="3"></circle>
                    </svg>
                    Tag #3
                  </span>
                </div>
              </div>

              <div class="mt-2">
                <a
                  href="https://laravel.cm/articles/traquer-un-champ-validation-conditionelle-react-hook-form-5"
                  class="group"
                >
                  <h4 class="text-lg leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                    A Tailwind CSS Card for Displaying Blog Posts
                  </h4>
                </a>

                <p class="mt-1 text-sm font-normal text-skin-base leading-5">
                  Metus potenti velit sollicitudin porttitor magnis elit lacinia
                  tempor varius, ut cras orci vitae parturient id nisi vulputate
                  consectetur, primis venenatis cursus tristique malesuada
                  viverra congue risus.
                </p>

                <div class="mt-3 flex items-center font-sans">
                  <div class="shrink-0">
                    <a href="https://stackdiary.com/">
                      <span class="sr-only">John Doe</span>

                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://stackdiary.com/140x100.png"
                        alt="Ekim Kael"
                      />
                    </a>
                  </div>

                  <div class="ml-3">
                    <p class="text-sm font-medium text-skin-inverted">
                      <a href="https://stackdiary.com" class="hover:underline">
                        John Doe
                      </a>
                    </p>

                    <div class="flex space-x-1 text-sm text-skin-muted">
                      <time datetime="2022-02-01">1 Feb, 2022</time>

                      <span aria-hidden="true">·</span>

                      <span>3 min read time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
