$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************
    // 1. Username
    $("#username").text(username);

    // 2. Statistics cards
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);

    // 3. Notifications count
    $("#notification-num").text(notifAmt);

    // 4. Sales Table
    sales.forEach(function (item) {
        $("#salesTableBody").append(`
            <tr>
                <td>${item.product}</td>
                <td>${item.quantity}</td>
                <td>${item.revenue}</td>
            </tr>
        `);
    });

    // 5. Activity List
    activities.forEach(function (item) {
        $("#activity-list").append(
            `<li>${item.message}</li>`
        );
    });

    // 6. Customer Table
    customers.forEach(function (customer) {

        let statusClass =
            customer.status === "Active"
                ? "status-active"
                : "status-pending";

        $("#customerTableBody").append(`
            <tr>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>
                    <span class="status ${statusClass}">
                        ${customer.status}
                    </span>
                </td>
                <td>${customer.joined}</td>
            </tr>
        `);
    });

    // 7. System Status List
    messages.forEach(function (item) {
        $("#system-status-list").append(
            `<li>${item.messsage}</li>`
        );
    });

    // 8. Notifications List
    notifications.forEach(function (item) {
        $("#notifications-list").append(
            `<li>${item.messsage}</li>`
        );
    });

    // 9. Tasks List
    tasks.forEach(function (item) {
        $("#tasks-list").append(
            `<li>${item.messsage}</li>`
        );
    });

    // ==========================
    // jQuery UI Widgets
    // ==========================

    // Button widgets
    $("button").button();

    // Tabs widget
    $("#dashboardTabs").tabs();

    // Accordion widget
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    // Datepicker widget
    $("#customerDate").datepicker();

    // Dialog widget
    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {

                var name = $("#customerName").val();
                var email = $("#customerEmail").val();

                if (!name || !email) {
                    alert(
                        "Please enter a name and email."
                    );
                    return;
                }

                alert("Customer created: " + name);

                $(this).dialog("close");
            },

            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    // Open dialog when button clicked
    $("#newCustomerButton").on("click", function () {
        $("#customerDialog").dialog("open");
    });


    });