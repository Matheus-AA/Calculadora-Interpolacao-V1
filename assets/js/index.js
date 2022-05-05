(function(){
    
    const $dados = document.querySelector('.dados');
    const $resultado = document.querySelector('.resultado');
    const $button = document.querySelector('.button');

    function calculaCota(){
        let cotaMaior = $dados.querySelector('.cotaMaior');
        let cotaMenor = $dados.querySelector('.cotaMenor');
        let dc = $dados.querySelector('.dc');
        let dp = $dados.querySelector('.dp');
        cotaMaior = (cotaMaior.value);
        cotaMenor = (cotaMenor.value);
        dc = (dc.value);
        dp = (dp.value);
        const diferencaDistancia = dc - dp;
        const diferencaCota = cotaMaior - cotaMenor;
        const porcentagem = (dp * 100) / dc;
        const tirarPct = (porcentagem / 100) * diferencaCota;
        const final = cotaMaior - tirarPct;
        const condominial = final - 0.4;
        const pv = final - 1.05;
        
        if(cotaMaior === '' || cotaMenor === '' || dc === '' || dp === ''){
            $resultado.innerHTML = 'Todos os campos devem estar preenchidos para realizar a conta';
        } else if(diferencaCota < 0){
            $resultado.innerHTML = 'O valor da <b>cota  maior</b> não pode ser inferior ao da <b>cota menor</b>';
        } else if(diferencaDistancia < 0){
            $resultado.innerHTML = '<b>A distancia entre cotas não pode ser inferiror a distancia da cota até o ponto a ser interpolado';
        } else{
            $resultado.innerHTML = `<b>A cota do ponto é: </b>${final}
            <br><b>Cota inicial com 0.40: </b>${condominial}
            <br><b>Cota inicial com 1.05: </b>${pv}` ;
        };
    };

    $button.addEventListener('click', calculaCota);

})();