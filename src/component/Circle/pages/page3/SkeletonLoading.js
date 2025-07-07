import Skeleton from 'react-loading-skeleton' 

const SkeletonLoading = () => { 
    return (
        <div className="row">
            {Array(6).fill(0).map((_, index) => ( 
                <div key={index} className="col-4 text-center p-5"> 
                    <Skeleton className="mb-4" circle={true} height={100} width={100}/> 
                    <Skeleton className="mb-2" height={30} count={2}/> 
                </div>    
            ))}
        </div>
    )
}
 
export default SkeletonLoading;