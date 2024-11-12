type Props = {
  name: string;
  avatar: string;
  roles?: string;
}
export const Person = ({name, avatar, roles= 'aux adm'}: Props)=>{
  return(
    <>
      <p>{name}</p>
      <p>{avatar}</p>
      <p>{roles}</p>
    </>
  );
}


