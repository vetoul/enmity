function S(e, o, a) {
    window.enmity.settings.set(e, o, a);
}

function T(e, o, a) {
    return window.enmity.settings.get(e, o, a);
}

function D(e, o, a) {
    return window.enmity.settings.getBoolean(e, o, a);
}

const { components: s } = window.enmity;
s.Alert;
const we = s.Button;
s.FlatList;
const Q = s.Image;
s.ImageBackground, s.KeyboardAvoidingView, s.Modal, s.Pressable, s.RefreshControl;
const Z = s.ScrollView;
s.SectionList, s.StatusBar, s.StyleSheet, s.Switch;
const b = s.Text;
s.TextInput, s.TouchableHighlight;
const L = s.TouchableOpacity;
s.TouchableWithoutFeedback, s.Touchable;
const E = s.View;
s.VirtualizedList, s.Form, s.FormArrow, s.FormCTA, s.FormCTAButton, s.FormCardSection, s.FormCheckbox;
const v = s.FormDivider;
s.FormHint, s.FormIcon;
const fe = s.FormInput;
s.FormLabel, s.FormRadio;
const i = s.FormRow,
    M = s.FormSection;
s.FormSelect, s.FormSubLabel;
const P = s.FormSwitch;
s.FormTernaryCheckBox, s.FormText, s.FormTextColors, s.FormTextSizes;

function be(e) {
    window.enmity.plugins.registerPlugin(e);
}

const I = {
    byProps: (...e) => window.enmity.modules.filters.byProps(...e),
    byName: (e, o) => window.enmity.modules.filters.byName(e, o),
    byTypeName: (e, o) => window.enmity.modules.filters.byTypeName(e, o),
    byDisplayName: (e, o) => window.enmity.modules.filters.byDisplayName(e, o),
};

function j(...e) {
    return window.enmity.modules.bulk(...e);
}

function k(...e) {
    return window.enmity.modules.getByProps(...e);
}

function pe(...e) {
    return window.enmity.modules.getByName(...e);
}

window.enmity.modules.common;
const h = window.enmity.modules.common.Constants;
const p = window.enmity.modules.common.Storage,
    _ = window.enmity.modules.common.Toasts,
    N = window.enmity.modules.common.Dialog;
const V = window.enmity.modules.common.Native,
    t = window.enmity.modules.common.React;
const G = window.enmity.modules.common.Users;

function ie(e, o, a, n) {
    const r = {
        type: e,
        author: {
            ...o,
            avatar: o.avatar
                ? `https://cdn.discordapp.com/avatars/${o.id}/${o.avatar}.${o.avatar?.startsWith("a_") ? "gif" : "png"}?size=1024`
                : "https://cdn.discordapp.com/embed/avatars/0.png",
        },
        context: a,
        content: n.edited
            ? [new Date(n.time).toLocaleString(), n.original, n.edited]
            : [new Date(n.time).toLocaleString(), n.original],
    };

    p.getItem("NoDeleteLogs").then((g) => {
        g = JSON.parse(g);
        if (r !== g[g.length - 1]) {
            g.push(r);
            p.setItem("NoDeleteLogs", JSON.stringify(g));
        }
    });
}

const manifest = {
    name: "NoDelete",
    version: "1.0.0",
    description: "Logs deleted and edited messages in Discord",
    authors: [{ name: "Marek (modified by spin)", id: "308440976723148800" }],
};

const Patcher = window.enmity.patcher.create(manifest.name);

const NoDelete = {
    ...manifest,
    onStart() {
        p.getItem("NoDeleteLogs").then((res) => {
            if (res == null) p.setItem("NoDeleteLogs", "[]");
        }).catch((err) => {
            console.log(`[${manifest.name} Storage Error]`, err);
        });

        const FluxDispatcher = k("_currentDispatchActionType", "_subscriptions", "_actionHandlers", "_waitQueue");
        const MessageStore = k("getMessage", "getMessages");
        const ChannelStore = k("getChannel", "getDMFromUserId");

        Patcher.before(FluxDispatcher._actionHandlers._orderedActionHandlers?.MESSAGE_DELETE.find(h => h.name === "MessageStore"), "actionHandler", (_, args) => {
            const originalMessage = MessageStore.getMessage(args[0].channelId, args[0].id);
            if (!originalMessage) return;

            if (!originalMessage?.content) return;

            const updatedMessage = {
                type: "MESSAGE_UPDATE",
                message: {
                    ...originalMessage,
                    content: `<span style="color:red; text-decoration:line-through;">${originalMessage.content}</span>`
                }
            };

            FluxDispatcher.dispatch(updatedMessage);

            ie("delete", originalMessage.author, originalMessage, {
                time: originalMessage.timestamp,
                original: originalMessage.content
            });
        });

        Patcher.before(FluxDispatcher._actionHandlers._orderedActionHandlers?.MESSAGE_UPDATE.find(h => h.name === "MessageStore"), "actionHandler", (_, args) => {
            const originalMessage = MessageStore.getMessage(args[0].message.channel_id, args[0].message.id);
            if (!originalMessage) return;

            const updatedMessage = {
                type: "MESSAGE_UPDATE",
                message: {
                    ...originalMessage,
                    content: `
                        <span style="color:gray; opacity:0.7;">${originalMessage.content}</span>
                        <br />
                        <span>${args[0].message.content}</span>
                    `
                }
            };

            FluxDispatcher.dispatch(updatedMessage);

            ie("edit", originalMessage.author, originalMessage, {
                time: args[0]?.message?.edited_timestamp,
                original: originalMessage.content,
                edited: args[0].message.content
            });
        });
    },

    onStop() {
        Patcher.unpatchAll();
        console.log(`[${manifest.name}] Plugin stopped.`);
    }
};

// Start the plugin
NoDelete.onStart();
