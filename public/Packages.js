const Packages = () => {
  const [loading, setLoading] = React.useState(false);
  const [packages, setPackages] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch('/packages').then(r => {
      return r.json();
    }).then(res => {
      setPackages(res.packages);
      setLoading(false);
    });
  }, []);

  const rows = packages.filter(p => !p.entregue).map(p => {
    const itens = p.itens && p.itens
      .filter(i => i && i.title && i.title.length && i.title !== 'Keyboard Kit' && i.title !== 'Keyboard Caps')
      .map(i => i.title).join(', ');
    const images = p.itens && p.itens.map(i => <img width="150" src={i.imagem} />);
    return (
      <tr key={p.id}>
        <td>{p.referencia}</td>
        <td>{p.rastreio}</td>
        <td>{p.data_hora_envio}</td>
        <td>{p.detalhes ? p.detalhes.entry_date_str : null}</td>
        <td>{p.detalhes ? p.detalhes.track_description : null}</td>
        <td>
          {(p.pesototal * 1.0).toFixed(2)}lbs/{(p.pesototal * 0.453592).toFixed(2)}kg
        </td>
        <td>{itens}</td>
        <td>{images}</td>
      </tr>
    );
  });

  return <table><tbody>{rows}</tbody></table>;
};
