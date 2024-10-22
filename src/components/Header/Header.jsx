import profile from '../../assets/profile.png'
function Header() {
    return (
        <div>
            <div className='flex justify-between items-center py-4'>
            <h2 className='text-4xl font-bold'>Knowledge Cafe</h2>
            <img className='w-14' src={profile} alt="" />
            </div>
            <hr />
        </div>
    );
}

export default Header;