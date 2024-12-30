const headerNav = document.getElementById("headerMenu");

headerNav.innerHTML = `

        <div class="headerCategories" onclick="openMenu1()">
          <div class="burgerMenu"></div>
          <div class="menuCategories">Produtos</div>
        </div>
        <ul class="menuProductCategories">
          <a href="https://vouanotar.com/produtos/cadernos-digitais" rel"tag"><li class="menuproductCategory">Cadernos Digitais</li></a>
          <div class="starSparkle">H</div>
          <li class="menuproductCategory">Planners</li>
          <div class="starSparkle">H</div>
          <li class="menuproductCategory">Agendas Digitais</li>
          <div class="starSparkle">H</div>
          <li class="menuproductCategory">Blocos de Anotações</li>
          <div class="starSparkle">H</div>
          <li class="menuproductCategory">Notas Adesivas</li>
        </ul>
        <div class="headerCategories" onclick="openMenu2()">
          <div class="burgerMenu"></div>
          <div class="menuCategories">Categorias</div>
        </div>



    <div id="mobileLeftMenu">
      <div class="headerContent">
        <div id="closeButton" onclick="closeMenu1()">
          x
        </div>
      </div>

      <div id="mobileLeftMenuContent">
      </div>
    </div>

    <div id="mobileRightMenu">
      <div class="headerContent">
        <div id="closeButton" onclick="closeMenu2()">
          x
        </div>
      </div>

      <div id="mobileRightMenuContent"></div>
    </div>

`;
