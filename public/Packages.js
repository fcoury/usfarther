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

  console.log('packages', packages);

  const rows = packages.map(p => (
    <tr key={p.id}>
      <td>{p.referencia}</td>
      <td>{p.rastreio}</td>
      <td>{p.detalhes ? p.detalhes.track_description : null}</td>
      <td>{p.itens && p.itens.filter(i => !!i).map(i => i.title).join(', ')}</td>
      <td>
        {p.itens && p.itens.map(i => <img width="150" src={i.imagem} />)}
      </td>
    </tr>
  ));

  return <table><tbody>{rows}</tbody></table>;
};
