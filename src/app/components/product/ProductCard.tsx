import React from 'react'
import Image from 'next/image'

export const ProductCard = () => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image width="500" height="500" src="/products/link--7-53112c3d4cce4e8aafe7756eb1178ab6-720xpng@2x.png" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="/products">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                Weight plate stand
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$35</p>
                </div>
            </div>


            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image width="500" height="500" src="/products/link--5-fecd38b08de54a8abaa78b45b7d6c682-720xpng@2x.png" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                LKey Dumbbells
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$99</p>
                </div>
            </div>


            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image width="500" height="500" src="/products/link--18-476121db60d7475db65f94fae541f820-720xpng@2x.png" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                Hack squat
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Blue</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$40</p>
                </div>
            </div>


            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image width="500" height="500" src="/products/link--6-da07595787ec425ea69a59d86277247d-720xpng@2x.png" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                Gym accessories
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$80</p>
                </div>
            </div>


            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image width="500" height="500" src="/products/link--14-aa87301cb74a4d7c8ecac4711ab02140-720xpng@2x.png" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <a href="#">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                Dumbbells
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">$35</p>
                </div>
            </div>
        </div>
    )
}
