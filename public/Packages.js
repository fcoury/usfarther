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

  return <h1>Length: {packages.length}</h1>;
};
