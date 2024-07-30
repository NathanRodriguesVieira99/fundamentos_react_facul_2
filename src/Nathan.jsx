export default function Nathan(props) {
  console.log(props)
  const { nome, idade, time } = props;
  let dadosUsuario = `Meu nome é ${nome},tenho ${idade} anos, e torco pro ${time}`;
  return (
    <>
      {dadosUsuario}
    </>
  )
}

