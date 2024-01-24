
        let datas = [];
        let selectedNodeId = null;

        // Create
        document.getElementById("add-node").addEventListener('click', function () {
            var selectedNode = document.getElementById("Node-type").value;
            var inputValue = document.getElementById("node-value").value;

            datas.push({
                NodeName: selectedNode,
                NodeValue: inputValue
            });

            updateDisplay();
        });

        // Update
        document.getElementById('show').addEventListener('click', function (event) {
            if (event.target.id === 'Node') {
                selectedNodeId = event.target.parentElement.id;
                document.getElementById('selected-node').value = datas[selectedNodeId].NodeName;
                document.getElementById('update-value').value = datas[selectedNodeId].NodeValue;
            }
        });

        document.getElementById('Update').addEventListener('click', function () {
            if (selectedNodeId !== null) {
                datas[selectedNodeId].NodeValue = document.getElementById('update-value').value;
                updateDisplay();
                clearSelectedNode();
            }
        });

        // Delete
        document.getElementById('Delete').addEventListener('click', function () {
            if (selectedNodeId !== null) {
                datas.splice(selectedNodeId, 1);
                updateDisplay();
                clearSelectedNode();
            }
        });

        // Display
        function updateDisplay() {
            document.getElementById('show').innerHTML = '';

            datas.map((data, index) => {
                document.getElementById('show').innerHTML += `
                    <div id="${index}">
                        <div id="Node" style="margin-top: 10px; cursor: pointer;">${data.NodeName}</div>
                        <div id="Value">${data.NodeValue}</div>
                    </div>
                `;
            });
        }

        // Clear selected node information
        function clearSelectedNode() {
            selectedNodeId = null;
            document.getElementById('selected-node').value = '';
            document.getElementById('update-value').value = '';
        }
  