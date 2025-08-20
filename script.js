 // Complete institution data for all 9 provinces
        const institutions = [
            // Eastern Cape
            {
                name: "Nelson Mandela University",
                province: "Eastern Cape",
                city: "Port Elizabeth",
                type: "university",
                url: "https://www.mandela.ac.za/"
            },
            {
                name: "University of Fort Hare",
                province: "Eastern Cape",
                city: "Alice",
                type: "university",
                url: "https://www.ufh.ac.za/"
            },
            {
                name: "Walter Sisulu University",
                province: "Eastern Cape",
                city: "Mthatha",
                type: "university",
                url: "https://www.wsu.ac.za/"
            },
            {   name: "Rhodes University",
                province: "Eastern Cape",
                city: "Grahamstown",
                type: "university",
                url: "https://www.ru.ac.za/"
            },
            {
                name: "Buffalo City TVET College",
                province: "Eastern Cape",
                city: "East London",
                type: "tvet",
                url: "https://www.bccollege.co.za/"
            },
            {
                name: "Eastcape Midlands TVET College",
                province: "Eastern Cape",
                city: "Uitenhage",
                type: "tvet",
                url: "https://www.emcol.co.za/"
            },
            {
                name: "Ikhala TVET College",
                province: "Eastern Cape",
                city: "Queenstown",
                type: "tvet",
                url: "https://www.ikhala.edu.za/"
            },
            {
                name: "Ingwe TVET College",
                province: "Eastern Cape",
                city: "Ngqeleni",
                type: "tvet",
                url: "https://www.ingwecollege.edu.za/"
            },
            {
                name: "King Hintsa TVET College",
                province: "Eastern Cape",
                city: "Willowvale",
                type: "tvet",
                url: "https://www.kinghintsacollege.edu.za/"
            },
            {
                name: "King Sabata Dalindyebo TVET College",
                province: "Eastern Cape",
                city: "Mthatha",
                type: "tvet",
                url: "https://www.ksdcollege.edu.za/"
            },
            {
                name: "Lovedale TVET College",
                province: "Eastern Cape",
                city: "Alice",
                type: "tvet",
                url: "https://www.lovedalecollege.edu.za/"
            },
            {
                name: "Port Elizabeth TVET College",
                province: "Eastern Cape",
                city: "Port Elizabeth",
                type: "tvet",
                url: "https://www.pecollege.edu.za/"
            },
            
            // Free State
            {
                name: "University of the Free State",
                province: "Free State",
                city: "Bloemfontein",
                type: "university",
                url: "https://www.ufs.ac.za/"
            },
            {
                name: "Central University of Technology",
                province: "Free State",
                city: "Bloemfontein",
                type: "university",
                url: "https://www.cut.ac.za/"
            },
            {
                name: "Flavius Mareka TVET College",
                province: "Free State",
                city: "Sasolburg",
                type: "tvet",
                url: "https://www.fmcollege.co.za/"
            },
            {
                name: "Goldfields TVET College",
                province: "Free State",
                city: "Welkom",
                type: "tvet",
                url: "https://www.goldfieldstvet.edu.za/"
            },
            {
                name: "Maluti TVET College",
                province: "Free State",
                city: "Phuthaditjhaba",
                type: "tvet",
                url: "https://www.malutitvet.co.za/"
            },
            {
                name: "Motheo TVET College",
                province: "Free State",
                city: "Bloemfontein",
                type: "tvet",
                url: "https://www.motheotvet.co.za/"
            },
            
            // Gauteng
            {
                name: "University of Johannesburg",
                province: "Gauteng",
                city: "Johannesburg",
                type: "university",
                url: "https://www.uj.ac.za/"
            },
            {
                name: "University of Pretoria",
                province: "Gauteng",
                city: "Pretoria",
                type: "university",
                url: "https://www.up.ac.za/"
            },
            {
                name: "University of the Witwatersrand",
                province: "Gauteng",
                city: "Johannesburg",
                type: "university",
                url: "https://www.wits.ac.za/"
            },
            {
                name: "Tshwane University of Technology",
                province: "Gauteng",
                city: "Pretoria",
                type: "university",
                url: "https://www.tut.ac.za/"
            },
            {
                name: "Central Johannesburg TVET College",
                province: "Gauteng",
                city: "Johannesburg",
                type: "tvet",
                url: "https://www.cjc.edu.za/"
            },
            {
                name: "Ekurhuleni East TVET College",
                province: "Gauteng",
                city: "Springs",
                type: "tvet",
                url: "https://www.eec.edu.za/"
            },
            {
                name: "Ekurhuleni West TVET College",
                province: "Gauteng",
                city: "Germiston",
                type: "tvet",
                url: "https://www.ewc.edu.za/"
            },
            {
                name: "Sedibeng TVET College",
                province: "Gauteng",
                city: "Vereeniging",
                type: "tvet",
                url: "https://www.sedcol.co.za/"
            },
            {
                name: "South West Gauteng TVET College",
                province: "Gauteng",
                city: "Johannesburg",
                type: "tvet",
                url: "https://www.swgc.co.za/"
            },
            {
                name: "Tshwane North TVET College",
                province: "Gauteng",
                city: "Pretoria",
                type: "tvet",
                url: "https://www.tnc.edu.za/"
            },
            {
                name: "Tshwane South TVET College",
                province: "Gauteng",
                city: "Pretoria",
                type: "tvet",
                url: "https://www.tsc.edu.za/"
            },
            {
                name: "Western TVET College",
                province: "Gauteng",
                city: "Krugersdorp",
                type: "tvet",
                url: "https://www.westcol.co.za/"
            },
            
            // KwaZulu-Natal
            {
                name: "University of KwaZulu-Natal",
                province: "KwaZulu-Natal",
                city: "Durban",
                type: "university",
                url: "https://www.ukzn.ac.za/"
            },
            {
                name: "Durban University of Technology",
                province: "KwaZulu-Natal",
                city: "Durban",
                type: "university",
                url: "https://www.dut.ac.za/"
            },
            {
                name: "Mangosuthu University of Technology",
                province: "KwaZulu-Natal",
                city: "Umlazi",
                type: "university",
                url: "https://www.mut.ac.za/"
            },
            {
                name: "University of Zululand",
                province: "KwaZulu-Natal",
                city: "Kwadlangezwa",
                type: "university",
                url: "https://www.unizulu.ac.za/"
            },
            
            


            {
                name: "Elangeni TVET College",
                province: "KwaZulu-Natal",
                city: "Durban",
                type: "tvet",
                url: "https://www.elangeni.edu.za/"
            },
            {
                name: "Esayidi TVET College",
                province: "KwaZulu-Natal",
                city: "Port Shepstone",
                type: "tvet",
                url: "https://www.esayidi.edu.za/"
            },
            {
                name: "Majuba TVET College",
                province: "KwaZulu-Natal",
                city: "Newcastle",
                type: "tvet",
                url: "https://www.majuba.edu.za/"
            },
            {
                name: "Mnambithi TVET College",
                province: "KwaZulu-Natal",
                city: "Ladysmith",
                type: "tvet",
                url: "https://www.mnambithicollege.co.za/"
            },
            {
                name: "Mthashana TVET College",
                province: "KwaZulu-Natal",
                city: "Vryheid",
                type: "tvet",
                url: "https://www.mthashanacollege.co.za/"
            },
            {
                name: "Thekwini TVET College",
                province: "KwaZulu-Natal",
                city: "Durban",
                type: "tvet",
                url: "https://www.thekwinicollege.co.za/"
            },
            {
                name: "Umfolozi TVET College",
                province: "KwaZulu-Natal",
                city: "Richards Bay",
                type: "tvet",
                url: "https://www.umfolozicollege.co.za/"
            },
            {
                name: "Umgungundlovu TVET College",
                province: "KwaZulu-Natal",
                city: "Pietermaritzburg",
                type: "tvet",
                url: "https://www.umgungundlovucollege.co.za/"
            },
            
            // Limpopo
            {
                name: "University of Limpopo",
                province: "Limpopo",
                city: "Polokwane",
                type: "university",
                url: "https://www.ul.ac.za/"
            },
            {
                name: "University of Venda",
                province: "Limpopo",
                city: "Thohoyandou",
                type: "university",
                url: "https://www.univen.ac.za/"
            },
            
            {
                name: "Capricorn TVET College",
                province: "Limpopo",
                city: "Polokwane",
                type: "tvet",
                url: "https://www.capricorncollege.edu.za/"
            },
            {
                name: "Lephalale TVET College",
                province: "Limpopo",
                city: "Lephalale",
                type: "tvet",
                url: "https://www.lephalalecollege.edu.za/"
            },
            {
                name: "Letaba TVET College",
                province: "Limpopo",
                city: "Tzaneen",
                type: "tvet",
                url: "https://www.letabacollege.edu.za/"
            },
            {
                name: "Mopani South East TVET College",
                province: "Limpopo",
                city: "Phalaborwa",
                type: "tvet",
                url: "https://www.mopanicollege.edu.za/"
            },
            {
                name: "Sekhukhune TVET College",
                province: "Limpopo",
                city: "Groblersdal",
                type: "tvet",
                url: "https://www.sekhukhunecollege.edu.za/"
            },
            {
                name: "Vhembe TVET College",
                province: "Limpopo",
                city: "Thohoyandou",
                type: "tvet",
                url: "https://www.vhembecollege.edu.za/"
            },
            {
                name: "Waterberg TVET College",
                province: "Limpopo",
                city: "Mokopane",
                type: "tvet",
                url: "https://www.waterbergcollege.edu.za/"
            },
            
            // Mpumalanga
            {
                name: "University of Mpumalanga",
                province: "Mpumalanga",
                city: "Mbombela",
                type: "university",
                url: "https://www.ump.ac.za/"
            },
            {
                name: "Ehlanzeni TVET College",
                province: "Mpumalanga",
                city: "Mbombela",
                type: "tvet",
                url: "https://www.ehlanzenicollege.edu.za/"
            },
            {
                name: "Gert Sibande TVET College",
                province: "Mpumalanga",
                city: "Standerton",
                type: "tvet",
                url: "https://www.gscollege.edu.za/"
            },
            {
                name: "Nkangala TVET College",
                province: "Mpumalanga",
                city: "Middelburg",
                type: "tvet",
                url: "https://www.nkangalacollege.edu.za/"
            },
            
            // North West
            {
                name: "North-West University",
                province: "North West",
                city: "Potchefstroom",
                type: "university",
                url: "https://www.nwu.ac.za/"
            },
            {
                name: "Orbit TVET College",
                province: "North West",
                city: "Rustenburg",
                type: "tvet",
                url: "https://www.orbitcollege.edu.za/"
            },
            {
                name: "Taletso TVET College",
                province: "North West",
                city: "Mmabatho",
                type: "tvet",
                url: "https://www.taletso.edu.za/"
            },
            {
                name: "Vuselela TVET College",
                province: "North West",
                city: "Klerksdorp",
                type: "tvet",
                url: "https://www.vuselelacollege.edu.za/"
            },
            
            // Northern Cape
            {
                name: "Sol Plaatje University",
                province: "Northern Cape",
                city: "Kimberley",
                type: "university",
                url: "https://www.spu.ac.za/"
            },
            
            {
                name: "Northern Cape Urban TVET College",
                province: "Northern Cape",
                city: "Kimberley",
                type: "tvet",
                url: "https://www.ncutvet.edu.za/"
            },
            {
                name: "Northern Cape Rural TVET College",
                province: "Northern Cape",
                city: "Upington",
                type: "tvet",
                url: "https://www.ncrvet.edu.za/"
            },
            
            // Western Cape
            {
                name: "University of Cape Town",
                province: "Western Cape",
                city: "Cape Town",
                type: "university",
                url: "https://www.uct.ac.za/"
            },
            {
                name: "Stellenbosch University",
                province: "Western Cape",
                city: "Stellenbosch",
                type: "university",
                url: "https://www.sun.ac.za/"
            },
            {
                name: "University of the Western Cape",
                province: "Western Cape",
                city: "Bellville",
                type: "university",
                url: "https://www.uwc.ac.za/"
            },
            {
                name: "Cape Peninsula University of Technology",
                province: "Western Cape",
                city: "Cape Town",
                type: "university",
                url: "https://www.cput.ac.za/"
            },
            {
                name: "False Bay TVET College",
                province: "Western Cape",
                city: "Fish Hoek",
                type: "tvet",
                url: "https://falsebaycollege.co.za/"
            },
            {
                name: "Northlink TVET College",
                province: "Western Cape",
                city: "Cape Town",
                type: "tvet",
                url: "https://www.northlink.co.za/"
            },
            {
                name: "South Cape TVET College",
                province: "Western Cape",
                city: "George",
                type: "tvet",
                url: "https://www.sccollege.co.za/"
            },
            {
                name: "West Coast TVET College",
                province: "Western Cape",
                city: "Malmesbury",
                type: "tvet",
                url: "https://www.westcoastcollege.co.za/"
            },
            {
                name: "Boland TVET College",
                province: "Western Cape",
                city: "Stellenbosch",
                type: "tvet",
                url: "https://www.bolandcollege.com/"
            },
            {
                name: "College of Cape Town",
                province: "Western Cape",
                city: "Cape Town",
                type: "tvet",
                url: "https://www.cct.edu.za/"
            }
        ];

        // Function to display institutions by province
        function displayInstitutions(filter = 'all', provinceFilter = null) {
            const container = document.getElementById('institutions-container');
            container.innerHTML = '';
            
            // Group by province
            const provinces = {};
            institutions.forEach(inst => {
                if ((filter === 'all' || inst.type === filter) && 
                    (!provinceFilter || inst.province === provinceFilter)) {
                    if (!provinces[inst.province]) {
                        provinces[inst.province] = [];
                    }
                    provinces[inst.province].push(inst);
                }
            });
            
            // Create province cards
            for (const province in provinces) {
                const provinceCard = document.createElement('div');
                provinceCard.className = 'province-card';
                provinceCard.innerHTML = `<h3>${province}</h3><div class="institution-list"></div>`;
                
                const listContainer = provinceCard.querySelector('.institution-list');
                
                // Add institutions for this province
                provinces[province].forEach(inst => {
                    const instItem = document.createElement('div');
                    instItem.className = 'institution-item';
                    const badgeClass = inst.type === 'university' ? 'badge-university' : 'badge-tvet';
                    const badgeText = inst.type === 'university' ? 'University' : 'TVET';
                    instItem.innerHTML = `
                        <a href="${inst.url}" class="institution-link" target="_blank">${inst.name}</a> 
                        <span class="badge ${badgeClass}">${badgeText}</span><br>
                        <small>${inst.city}</small>`;
                    listContainer.appendChild(instItem);
                });
                
                container.appendChild(provinceCard);
            }
        }
        
        // Filter function
        function filterInstitutions(type) {
            // Update active tab
            document.querySelectorAll('.category-tab').forEach(tab => {
                tab.classList.remove('active');
                if (tab.textContent.toLowerCase().includes(type)) {
                    tab.classList.add('active');
                }
            });
            
            displayInstitutions(type === 'all' ? 'all' : type);
        }
        
        // Filter by province
        function filterByProvince(province) {
            displayInstitutions('all', province);
        }
        
        // Search function
        function searchInstitutions() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const container = document.getElementById('institutions-container');
            container.innerHTML = '';
            
            const filtered = institutions.filter(inst => 
                inst.name.toLowerCase().includes(searchTerm) || 
                inst.city.toLowerCase().includes(searchTerm) ||
                inst.province.toLowerCase().includes(searchTerm)
            );
            
            if (filtered.length === 0) {
                container.innerHTML = '<p>No institutions found matching your search.</p>';
                return;
            }
            
            // Group results by province
            const provinces = {};
            filtered.forEach(inst => {
                if (!provinces[inst.province]) {
                    provinces[inst.province] = [];
                }
                provinces[inst.province].push(inst);
            });
            
            // Create results display
            for (const province in provinces) {
                const provinceCard = document.createElement('div');
                provinceCard.className = 'province-card';
                provinceCard.innerHTML = `<h3>${province}</h3><div class="institution-list"></div>`;
                
                const listContainer = provinceCard.querySelector('.institution-list');
                
                provinces[province].forEach(inst => {
                    const instItem = document.createElement('div');
                    instItem.className = 'institution-item';
                    const badgeClass = inst.type === 'university' ? 'badge-university' : 'badge-tvet';
                    const badgeText = inst.type === 'university' ? 'University' : 'TVET';
                    instItem.innerHTML = `
                        <a href="${inst.url}" class="institution-link" target="_blank">${inst.name}</a> 
                        <span class="badge ${badgeClass}">${badgeText}</span><br>
                        <small>${inst.city}</small>`;
                    listContainer.appendChild(instItem);
                });
                
                container.appendChild(provinceCard);
            }
        }
        
        // Initialize the page
        window.onload = function() {
            displayInstitutions();
            
            // Add event listener for Enter key in search
            document.getElementById('search-input').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchInstitutions();
                }
            });
        };