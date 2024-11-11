export const Person =()=>{
  const avatar: string = 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQYzNRvQ0rLqKSV7nJQ9WO0KhQisB-LiM3Wo6Q8oVDETQSBZu2MtjGr17ZNBOUzup9owz-G3oIG87PPzGsSr7s';

  return(
    <>
      <h3 style={{color: 'green'}}>Estilizando o texto</h3>
      <img 
        src={avatar} alt=""
        style={{width: '300px'}}
      />
    </>
  )
}