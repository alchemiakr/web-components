import * as Icon from '@alchemiakr/web-components/icon';

export default function Page() {
    return (
        <>
            <div className="container mx-auto">
                <h1 className="mt-6 mb-3 text-3xl font-bold">Icon</h1>
                <section>
                    <div className="flex">
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg">
                            <span className="w-5 h-5"><Icon.Check /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-green-500 bg-green-100">
                            <span className="w-5 h-5"><Icon.Check /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-yellow-500 bg-yellow-100">
                            <span className="w-5 h-5"><Icon.Check /></span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg">
                            <span className="w-5 h-5"><Icon.Danger /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-red-500 bg-red-100">
                            <span className="w-5 h-5"><Icon.Danger /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-yellow-500 bg-yellow-100">
                            <span className="w-5 h-5"><Icon.Danger /></span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg">
                            <span className="w-5 h-5"><Icon.Warn /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-red-500 bg-red-100">
                            <span className="w-5 h-5"><Icon.Warn /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-yellow-500 bg-yellow-100">
                            <span className="w-5 h-5"><Icon.Warn /></span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-green-500">
                            <span className="w-5 h-5"><Icon.BasicSpinnerBold /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-blue-500">
                            <span className="w-5 h-5"><Icon.BasicSpinnerBold /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-yellow-500">
                            <span className="w-5 h-5"><Icon.BasicSpinnerBold /></span>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-green-500">
                            <span className="w-5 h-5"><Icon.BasicSpinner /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-blue-500">
                            <span className="w-5 h-5"><Icon.BasicSpinner /></span>
                        </div>
                        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg text-yellow-500">
                            <span className="w-5 h-5"><Icon.BasicSpinner /></span>
                        </div>
                    </div>
                </section>
            </div>
            ¸
        </>
    );
}
